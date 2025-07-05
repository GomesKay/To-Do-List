import { prisma } from "../lib/prisma"
import {
  CreateTaskInput,
  DeleteTaskInput,
  UpdateTaskCompletedInput,
  UpdateTaskInput,
} from "../types/task"

// Services
export async function getAllTasks() {
  return await prisma.task.findMany()
}

export async function createTask({ title }: CreateTaskInput) {
  return await prisma.task.create({
    data: { title },
  })
}

export async function updateTask({ id, title }: UpdateTaskInput) {
  return await prisma.task.update({
    where: { id },
    data: {
      title,
    },
  })
}

export async function updateTaskCompleted({ id }: UpdateTaskCompletedInput) {
  return await prisma.task.update({
    where: { id },
    data: { completed: true },
  })
}

export async function deleteTask({ id }: DeleteTaskInput) {
  return await prisma.task.delete({
    where: { id },
  })
}
