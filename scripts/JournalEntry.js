/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <section class="daily_entry">
        <div class="entry__id">ID:${entry.id}</div>
        <div class="entry__date">${entry.date}</div>
        <div class="entry__concept">Concept: ${entry.concept}</div>
        <div class="entry__entry">${entry.entry}</div>
        <div class="entry__mood">Mood: ${entry.mood}</div>
    </section>
    `
}

{/* <section id="entry--${entry.id}" class="journalEntry">
            Display the entry's full text, and the date
            it was entered here.
        </section> */}