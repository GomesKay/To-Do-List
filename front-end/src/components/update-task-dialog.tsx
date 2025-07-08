import { ErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { type TaskFormData, taskFormSchema } from "@/schemas/task-schema"
import type { UpdateTaskDialogProps } from "@/types/task"

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

// Dialog para Atualizar Tarefa
export function UpdateTaskDialog({
  taskId,
  onTaskChanged,
}: UpdateTaskDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskFormSchema),
  })

  // Conexão com a API | PUT - Atualiza tarefa
  async function updateTask(data: TaskFormData) {
    const { title } = data

    await axios.put(`http://localhost:3333/tasks/${taskId}`, {
      title: title,
    })

    reset()
    toast.success("Tarefa atualizada com sucesso")

    onTaskChanged()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" className="cursor-pointer">
          Editar
        </Button>
      </DialogTrigger>
      <DialogContent className="font-text space-y-2 bg-zinc-950 text-white">
        <DialogHeader>
          <DialogTitle>Atualize sua tarefa</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(updateTask)}
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
