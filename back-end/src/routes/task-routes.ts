import { Router } from "express"
import {
  addTaskController,
  getTasksController,
  removeTaskController,
  updateTaskCompletedController,
  updateTaskController,
} from "../controllers/task-controller"

export const taskRoutes = Router()

taskRoutes.route("/tasks").get(getTasksController).post(addTaskController)
taskRoutes
  .route("/tasks/:id")
  .put(updateTaskController)
  .delete(removeTaskController)
taskRoutes.route("/tasks/:id/completed").patch(updateTaskCompletedController)
