/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const journalEntryHTMLConverter = (entry) => {
    return `
    <section class="dailyEntry" id="${entry.id}">
        <div class="dailyEntry__date">${entry.date}</div>
        <div class="dailyEntry__concept">Concept: ${entry.concept}</div>
        <div class="dailyEntry__entry">${entry.entry}</div>
        <div class="dailyEntry__mood">Mood: ${entry.mood}</div>
    </section>
    `
}

{/* <section id="entry--${entry.id}" class="journalEntry">
            Display the entry's full text, and the date
            it was entered here.
        </section> */}