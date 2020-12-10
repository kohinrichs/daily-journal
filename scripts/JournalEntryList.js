/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
import { journalEntryHTMLConverter } from "./JournalEntry.js"

const contentTarget = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("journalStateChanged", () => {
    journalEntryList()
})

// to Reset Form (something Is not Working with this)

eventHub.addEventListener("resetForm", () => {
    document.querySelector("#journalDate").value = ""
    document.querySelector("#journalConcepts").value = ""
    document.querySelector("#journalEntry").value = ""
    document.querySelector("#moodForTheDay").value = ""
    })


const render = (journalEntryArray) => {
    const allEntriesConvertedToStrings = journalEntryArray.map(
        (journalEntry) => {
            return journalEntryHTMLConverter(journalEntry)
        }
    ).join("")
    contentTarget.innerHTML = allEntriesConvertedToStrings
}

export const journalEntryList = () => {
    getJournalEntries().then(() => {
        const allEntries = useJournalEntries()
        render(allEntries)
    })
}

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