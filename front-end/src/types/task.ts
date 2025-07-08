export interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
}

export interface TaskCardProps {
  tasks: Task[]
  onTaskChanged: () => void
}

export interface CreateTaskDialogProps {
  onTaskCreated: () => void
}

export interface UpdateTaskDialogProps {
  taskId: string
  onTaskChanged: () => void
}

export interface DeleteTaskAlertDialogProps {
  task: Task
  onTaskChanged: () => void
}
