import { useState } from 'react'

const PRIORITIES = ['Low', 'Medium', 'High']

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const cleanTitle = title.trim()
    if (cleanTitle === '') {
      setError('Task title is required. Enter at least one character.')
      return
    }

    onAddTask({
      title: cleanTitle,
      description: description.trim(),
      priority,
    })

    setTitle('')
    setDescription('')
    setPriority('Medium')
    setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="task-title">Task title *</label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            if (error) setError('')
          }}
          placeholder="e.g. Finish React assignment"
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'title-error' : undefined}
        />
        {error && (
          <p id="title-error" className="error" role="alert">
            {error}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="task-description">Description (optional)</label>
        <textarea
          id="task-description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add details if needed"
        />
      </div>

      <div className="field">
        <label htmlFor="task-priority">Priority</label>
        <select
          id="task-priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {PRIORITIES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Add task
      </button>
    </form>
  )
}
