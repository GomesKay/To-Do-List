import { Task } from "../models/task-model"

export type CreateTaskInput = Pick<Task, "title">
