export default function DashboardSummary({ total, pending, completed }) {
  return (
    <section className="summary" aria-label="Task summary">
      <div className="stat stat-total">
        <span className="stat-value" data-testid="total-count">{total}</span>
        <span className="stat-label">Total Tasks</span>
      </div>
      <div className="stat stat-pending">
        <span className="stat-value" data-testid="pending-count">{pending}</span>
        <span className="stat-label">Pending Tasks</span>
      </div>
      <div className="stat stat-completed">
        <span className="stat-value" data-testid="completed-count">{completed}</span>
        <span className="stat-label">Completed Tasks</span>
      </div>
    </section>
  )
}
