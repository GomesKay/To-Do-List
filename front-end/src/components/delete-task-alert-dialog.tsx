import axios from "axios"
import { toast } from "sonner"

import type { DeleteTaskAlertDialogProps } from "@/types/task"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { Button } from "./ui/button"

export function DeleteTaskAlertDialog({
  task,
  onTaskChanged,
}: DeleteTaskAlertDialogProps) {
  async function handleDeleteTask(id: string) {
    try {
      await axios.delete(`http://localhost:3333/tasks/${id}`)

      toast.success("Tarefa deletada com sucesso")

      onTaskChanged()
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" variant="destructive" className="cursor-pointer">
          Deletar
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="font-text bg-zinc-950">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            Tem certeza que deseja deletar a tarefa?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação irá deletar permanentemente sua tarefa
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDeleteTask(task.id)}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
