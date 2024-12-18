# Personal Diary

- React as the frontend framework.
- TailwindCSS for styling.
- State and Effects: Manage state and use effects appropriately.
- LocalStorage: Store and retrieve diary entries using localStorage.
- 
## Features:
- Homepage:
Display a list of diary entries sorted by date (newest first).
Each entry should be displayed as a card with a preview image, date and title.
Clicking on a card should open a modal with the full entry details (title, date, image, content).
☝️This can be achieved by setting the desired card data in a state variable 😉
- Add Entry Modal:
Action button “Add Entry” to open a modal for adding a new entry.
Check if there’s already an entry for the day. If so, prompt the user to return the next day.
If not, show a form asking for:
Title
Date
Image URL
Content
Validate that all fields are populated before submission.
On form submission, add the entry to a localStorage item as an array item.
- Loading Entries:
On app load, load diary entries from localStorage.
Deploy the application as a static site on Render.
