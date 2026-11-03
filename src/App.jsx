import { useState } from 'react'
import DashboardSummary from './components/DashboardSummary.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskFilter from './components/TaskFilter.jsx'
import TaskList from './components/TaskList.jsx'
import { createId } from './utils/createId.js'

const initialTasks = [
  
]

export default function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('All')

  const total = tasks.length
  const completed = tasks.filter((t) => t.status === 'Completed').length
  const pending = total - completed

  const visibleTasks = tasks.filter((t) => filter === 'All' || t.status === filter)

  function addTask({ title, description, priority }) {
    const newTask = {
      id: createId(),
      title,
      description,
      priority,
      status: 'Pending',
    }
    setTasks((prev) => [newTask, ...prev])
  }

  function toggleStatus(id) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === 'Pending' ? 'Completed' : 'Pending' }
          : t
      )
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Management Dashboard</h1>
        <p>Organize your day and see what is done and what is still open.</p>
      </header>

      <DashboardSummary total={total} pending={pending} completed={completed} />

      <main className="layout">
        <section className="panel form-panel" aria-labelledby="add-heading">
          <h2 id="add-heading">Add a task</h2>
          <TaskForm onAddTask={addTask} />
        </section>

        <section className="panel list-panel" aria-labelledby="list-heading">
          <div className="list-header">
            <h2 id="list-heading">Your tasks</h2>
            <TaskFilter current={filter} onChange={setFilter} />
          </div>
          <TaskList
            tasks={visibleTasks}
            filter={filter}
            onToggleStatus={toggleStatus}
            onDelete={deleteTask}
          />
        </section>
      </main>
    </div>
  )
}
