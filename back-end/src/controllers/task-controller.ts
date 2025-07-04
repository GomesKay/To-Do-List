import type { Request, Response } from "express"
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
  updateTaskCompleted,
} from "../services/task-service"
import { bodyTaskSchema, paramsTaskSchema } from "../schemas/task-schema"

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

export async function updateTaskController(req: Request, res: Response) {
  try {
    const { id } = paramsTaskSchema.parse(req.params)
    const { title } = bodyTaskSchema.parse(req.body)
    const updatedTask = await updateTask({ id, title })

    if (!updatedTask) {
      res.status(404).send({ errro: "Tarefa não encontrada" })
      return
    }

    res.status(200).send(updatedTask)
  } catch (error) {
    res.status(500).send({ error: "Erro ao atualizar tarefa" })
  }
}

export async function updateTaskCompletedController(
  req: Request,
  res: Response
) {
  try {
    const { id } = paramsTaskSchema.parse(req.params)
    const taskCompleted = await updateTaskCompleted({ id })

    res.status(200).send(taskCompleted)
  } catch (error) {
    res.status(500).send({ error: "Erro ao completar tarefa" })
  }
}

export async function removeTaskController(req: Request, res: Response) {
  try {
    const { id } = paramsTaskSchema.parse(req.params)
    await deleteTask({ id })

    res.status(200).send({ message: "Tarefa deletada com sucesso" })
  } catch (error) {
    res.status(500).send({ error: "Erro ao deletar tarefa" })
  }
}
