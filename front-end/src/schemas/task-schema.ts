import z from "zod"

export const taskFormSchema = z.object({
  title: z.string().nonempty("Nome da tarefa é obrigatório"),
})

export type TaskFormData = z.infer<typeof taskFormSchema>
