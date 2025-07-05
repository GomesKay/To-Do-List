import z from "zod"

// Schemas do Zod (Tipagem)
export const bodyTaskSchema = z.object({
  title: z.string(),
})

export const paramsTaskSchema = z.object({
  id: z.string().uuid(),
})
