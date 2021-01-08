/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const journalEntryHTMLConverter = (entry) => {
    return `
    <div class="dailyEntry" id="entry.id">
        <div class="dailyEntry__date">${entry.date}</div>
        <div class="dailyEntry__concept">Concept: ${entry.concept}</div>
        <div class="dailyEntry__entry">${entry.entry}</div>
        <div class="dailyEntry__mood">Mood: ${entry.moodName.label}</div>
        <button class="button" id="deleteEntry--${entry.id}">Delete</button> 
    </div>
    `
}

{/* <section id="entry--${entry.id}" class="journalEntry">
            Display the entry's full text, and the date
            it was entered here.
        </section> */}