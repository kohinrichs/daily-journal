import { JournalForm } from './JournalForm.js';
import { journalEntryList } from "./JournalEntryList.js"
import { FilterBar } from './FilterBar.js';

JournalForm();
FilterBar();
journalEntryList();




// CURRENT ISSUES
    // - Submissions are being saved with empty entries (Seems to be connected to the reset button > something must be off in the order flow.)