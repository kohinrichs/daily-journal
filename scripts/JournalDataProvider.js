/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "11/9/2020",
        concept: "Orientation",
        entry: "We learned more about our machines and installed some of the programs we need to be successful in this course.",
        mood: "Anxious" 
    },
    {
        id: 2,
        date: "11/11/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 3,
        date: "11/19/2020",
        concept: "Javascript",
        entry: "We learned about using Javascript to create the HTML for our web applications.",
        mood: "Excited" 
    },
    
    // {
    //     id: ,
    //     date: "",
    //     concept: "",
    //     entry: ".",
    //     mood: "" 
    // },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}