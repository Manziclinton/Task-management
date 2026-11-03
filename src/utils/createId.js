// Returns a unique id for each task (never an array index).
let counter = 0

export function createId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  counter += 1
  return `task-${Date.now()}-${counter}-${Math.random().toString(36).slice(2, 8)}`
}
