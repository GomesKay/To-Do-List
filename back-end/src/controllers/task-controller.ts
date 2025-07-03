import type { Request, Response } from "express"
import { createTask, getAllTasks } from "../services/task-service"
import { bodyTaskSchema } from "../schemas/task-schema"

export async function getTasksController(req: Request, res: Response) {
  try {
    const tasks = await getAllTasks()

    res.status(200).send(tasks)
  } catch (error) {
    res.status(500).send({ error: "Erro ao obter tarefas" })
  }
}

export async function addTaskController(req: Request, res: Response) {
  try {
    const { title } = bodyTaskSchema.parse(req.body)
    const newTask = await createTask({ title })

    res.status(201).send(newTask)
  } catch (error) {
    res.status(500).send({ error: "Erro ao obter tarefas" })
  }
}

export async function updateTaskController() {}

export async function updateTaskCompletedController() {}

export async function removeTaskController() {}
