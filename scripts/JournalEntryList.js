import { useJournalEntries, getJournalEntries, deleteEntry } from "./JournalDataProvider.js"
import { journalEntryHTMLConverter } from "./JournalEntry.js"
import { getMoods, useMoods } from "./MoodProvider.js"

const contentTarget = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("journalStateChanged", () => {
    journalEntryList()
})

export const journalEntryList = () => {
    getMoods()
        .then(() => {
        let mood = useMoods()
        
        getJournalEntries()
        .then(() => {
        const allEntries = useJournalEntries()
        render(allEntries, mood)
    })
        }
    )

  
}

const render = (journalEntryArray, moods) => {
    const allEntriesConvertedToStrings = journalEntryArray.map(
        (journalEntry) => {
            const associatedMood = moods.find(
                (mood) => {
                    return mood.id === journalEntry.moodId
                }
            )
            journalEntry.moodName = associatedMood

            return journalEntryHTMLConverter(journalEntry)
        }
    ).join("")

    contentTarget.innerHTML = allEntriesConvertedToStrings
}

// To reset form after the save button has been clicked
eventHub.addEventListener("resetForm", () => {
    document.querySelector("#journalDate").value = ""
    document.querySelector("#journalConcepts").value = ""
    document.querySelector("#journalEntry").value = ""
    document.querySelector("#moodForTheDay").value = ""
    })

// New Event Listen for FILTERING entries by mood
eventHub.addEventListener("moodChosen", event => {
    if (event.target.moodThatWasChosen !== "0") {

        const moods = useMoods()
        const mood = moods.find((mood) => mood.id === parseInt(event.detail.moodThatWasChosen))
      
        const entries = useJournalEntries()
        const matchingEntries = entries.filter( (entry) => entry.moodId === mood.id)

        render(matchingEntries, moods)
    }
})

// New Event Listener for DELETING journal entries
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, entryId] = clickEvent.target.id.split("--")

        deleteEntry(entryId)
    }
})

// Render ALL Journal Entries initially

// OLD CODE
// export const EntryListComponent = () => {

//     // DOM reference to where all entries will be rendered
//     const entryLog = document.querySelector(".entryLog")

//     // Use the journal entry data from the data provider component
//     const entries = useJournalEntries()

//     for (const entry of entries) {
//        const entryHTML = JournalEntryComponent(entry)
//         entryLog.innerHTML += entryHTML
//     }
// }