import { ErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { type TaskFormData, taskFormSchema } from "@/schemas/task-schema"
import type { CreateTaskDialogProps } from "@/types/task"

import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

// Componente de Criação de Tarefa
export function CreateTaskDialog({ onTaskCreated }: CreateTaskDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskFormSchema),
  })

  // Conexão com a API | POST - Criação de novas tarefas
  async function createTask(data: TaskFormData) {
    const { title } = data

    await axios.post("http://localhost:3333/tasks", {
      title: title,
    })

    reset()
    toast.success("Tarefa criada com sucesso")

    onTaskCreated()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="w-xs cursor-pointer max-[375px]:w-44 dark:bg-zinc-950 dark:text-white"
        >
          Criar uma tarefa
        </Button>
      </DialogTrigger>

      <DialogContent className="font-text space-y-2 bg-zinc-950 text-white">
        <DialogHeader>
          <DialogTitle>Crie uma nova tarefa</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(createTask)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-4">
            <Label htmlFor="title">Título da tarefa</Label>

            <Input
              type="text"
              id="title"
              placeholder="Nome da tarefa"
              {...register("title")}
            />

            <ErrorMessage
              errors={errors}
              name="title"
              render={({ message }) => (
                <p className="text-sm font-semibold text-red-500">{message}</p>
              )}
            />
          </div>

          <DialogFooter>
            <Button type="submit" className="cursor-pointer">
              Enviar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
