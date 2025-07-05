import express from "express"
import cors from "cors"
import { taskRoutes } from "./routes/task-routes"

export const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))

app.use(taskRoutes)
