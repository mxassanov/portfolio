import TaskSerialize from '../utils/TaskSerialize'
import type Task from '~/type/Task'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const assignees = 36490261
  const teamId = 4695717

  const params = getQuery(event)

  const query = new URLSearchParams(
    Object.assign(
      {
        'subtasks': 'true',
        'assignees[]': `${assignees}`,
        'include_closed': 'true',
        'custom_task_ids': 'true',
        'page': params.page,
      },
    ),
  )

  const response = await fetch(
  `https://api.clickup.com/api/v2/team/${teamId}/task?${query}`,
  {
    method: 'GET',
    headers: {
      Authorization: `${runtimeConfig.token}`,
    },
  },
  )

  const data = (await response.json())?.tasks

  const result: Task[] = data.length ? data.map((task: { [key: string]: unknown }) => TaskSerialize(task)) : []

  return result
})
