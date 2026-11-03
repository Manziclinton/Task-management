import TaskCard from './TaskCard.jsx'

function emptyMessage(filter) {
  if (filter === 'Pending') return 'No pending tasks. Everything is done, or add a new task.'
  if (filter === 'Completed') return 'No completed tasks yet. Mark a task as completed to see it here.'
  return 'No tasks yet. Add your first task using the form.'
}

export default function TaskList({ tasks, filter, onToggleStatus, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty-state">{emptyMessage(filter)}</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
