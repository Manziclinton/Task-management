# Task Management Dashboard

A small, responsive Task Management Dashboard built with React and Vite.

## Setup

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Features

- Dashboard overview with Total, Pending and Completed counts that update automatically
- Add a task (title required, description optional, priority Low / Medium / High); empty or whitespace-only titles are rejected and the form clears after a successful submit
- Task list with title, description, priority and status; friendly empty-state message
- Mark a task as Completed, change it back to Pending, or Delete it
- All / Pending / Completed filters that update instantly
- Responsive layout for desktop and mobile (plain CSS)

## Project structure

```
src/
  App.jsx                    State (tasks, filter) and event handlers
  main.jsx                   Entry point
  index.css                  Styles and responsive rules
  components/
    DashboardSummary.jsx     Three summary values
    TaskForm.jsx             Add-task form with validation
    TaskFilter.jsx           All / Pending / Completed buttons
    TaskList.jsx             List and empty state
    TaskCard.jsx             One task with actions
  utils/
    createId.js              Unique task ID generator
```

## Task data structure

```js
{ id, title, description, priority, status }
// priority: 'Low' | 'Medium' | 'High'
// status:   'Pending' | 'Completed'
```

## Expected user flow

1. Open the dashboard and see the initial tasks and summary counts.
2. Add a task with the form and watch the summary update.
3. Mark it as Completed and view it with the Completed filter.
4. Switch back to All, delete a task and check that the counts update.
