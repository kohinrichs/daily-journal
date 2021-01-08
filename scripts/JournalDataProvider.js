/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const eventHub = document.querySelector(".container")

let journal = []


export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

// export const useJournalEntries = () => journal.slice()

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
            // What should happen when we finally have the array?
            journal = parsedEntries
        })
}

export const saveJournalEntry = journalEntry => {
    // Use `fetch` with the POST method to add your entry to your API
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntry)
    })
        .then(getJournalEntries)
        .then(dispatchStateChangeEvent)
}


    // You export a function that provides a version of the
    // // raw data in the format that you want
