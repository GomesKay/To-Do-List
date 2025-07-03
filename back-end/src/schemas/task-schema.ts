import z from "zod"

export const bodyTaskSchema = z.object({
  title: z.string(),
})
