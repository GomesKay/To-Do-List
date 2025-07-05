import { Task } from "../models/task-model"

// Configuração de uma nova tipagem usando o Pick (Nativo do TypeScript)
export type CreateTaskInput = Pick<Task, "title">

export type UpdateTaskInput = Pick<Task, "id" | "title">

export type UpdateTaskCompletedInput = Pick<Task, "id">

export type DeleteTaskInput = Pick<Task, "id">
