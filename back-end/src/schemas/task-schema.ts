import z from "zod"

export const bodyTaskSchema = z.object({
  title: z.string(),
})

export const paramsTaskSchema = z.object({
  id: z.string().uuid(),
})
