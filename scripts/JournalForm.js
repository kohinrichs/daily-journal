import { saveJournalEntry } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodProvider.js"

const contentTarget = document.querySelector(".journal__form")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitJournalEntry") {
        let date = document.querySelector("#journalDate").value
        let concept = document.querySelector("#journalConcepts").value
        let entry = document.querySelector("#journalEntry").value
        let mood = document.querySelector("#moodForTheDay").value

        const newJournalEntry = {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood
        }
    
        saveJournalEntry(newJournalEntry)

    }

    // const customEvent = new CustomEvent("resetForm")
    //     eventHub.dispatchEvent(customEvent)

})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitJournalEntry") {
        const customEvent = new CustomEvent("resetForm")
        eventHub.dispatchEvent(customEvent)
    }
    })

const render = () => {
   
    getMoods()
        .then(() => {
        let allMoods = useMoods()
        
    contentTarget.innerHTML = `
        <div id="journal__Form">
            <!-- Journal Date -->
                <fieldset>
                    <label for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
            <!-- Journal Concepts -->
                <fieldset>
                    <label for="journalConcepts">Concepts Covered</label>
                    <input type="text" name="journalConcepts" id="journalConcepts">
                </fieldset>
            <!-- Journal Entry -->
                <fieldset>
                    <label for="journalEntry">Journal Entry</label>
                    <textarea type="text" name="journalEntry" id="journalEntry" placeholder="How was your day?"></textarea>
                </fieldset>
            <!-- Mood Selector -->
               <fieldset>
                    <label for="moodForTheDay">Mood For The Day:</label>
                        <select class= "dropdown" id="moodForTheDay">
                            <option value="0">Please select a mood...</option>
                            ${
                                allMoods.map((mood) =>
                                    `<option value="${mood.id}">
                                        ${mood.label}
                                    </option>`
                                )
                            }
                        </select>
                </fieldset>
            <!-- Submit button. -->
            <button type="button" id="submitJournalEntry">Submit Journal Entry</button>
        </div>
    `
    })
}

export const JournalForm = () => {
    render()
}

