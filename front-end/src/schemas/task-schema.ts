import z from "zod"

// Schemas do Zod (Tipagem)
export const taskFormSchema = z.object({
  title: z.string().nonempty("Nome da tarefa é obrigatório"),
})

export type TaskFormData = z.infer<typeof taskFormSchema>
