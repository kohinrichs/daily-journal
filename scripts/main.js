import { JournalForm } from './JournalForm.js';

import "./JournalEntryList.js"
import { journalEntryList } from './JournalEntryList.js';




JournalForm();
journalEntryList();



// CURRENT ISSUES
    // - Journal Entries aren't loading on main page load
    // - Submissions are being saved with empty entries (Seems to be connected to the reset button > something must be off in the order flow.)