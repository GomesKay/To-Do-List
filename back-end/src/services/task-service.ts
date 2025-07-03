import { prisma } from "../lib/prisma"
import { CreateTaskInput } from "../types/task"

export async function getAllTasks() {
  return await prisma.task.findMany()
}

export async function createTask({ title }: CreateTaskInput) {
  return await prisma.task.create({
    data: { title },
  })
}

export async function updateTask() {}

export async function updateTaskCompleted() {}

export async function deleteTask() {}
