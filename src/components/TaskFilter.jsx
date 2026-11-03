const FILTERS = ['All', 'Pending', 'Completed']

export default function TaskFilter({ current, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filter tasks by status">
      {FILTERS.map((name) => (
        <button
          key={name}
          type="button"
          className={`filter-btn ${current === name ? 'active' : ''}`}
          aria-pressed={current === name}
          onClick={() => onChange(name)}
        >
          {name}
        </button>
      ))}
    </div>
  )
}
