export default interface Task {
  id: string
  name: string
  description: string
  priority: {
    name: string
    color: string
  }
}
