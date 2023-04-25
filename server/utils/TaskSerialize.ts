import type Task from '~~/type/Task'

export default function TaskSerialize(el: { [key: string]: any }): Task {
  return {
    id: el.id,
    name: el.name,
    description: el.description,
    priority: {
      color: el.priority?.color ?? '',
      name: el.priority?.priority ?? '',
    },
  }
}
