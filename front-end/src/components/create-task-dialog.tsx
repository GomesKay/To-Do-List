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

export function CreateTaskDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="w-xs cursor-pointer dark:bg-zinc-950 dark:text-white"
        >
          Criar uma tarefa
        </Button>
      </DialogTrigger>

      <DialogContent className="font-text space-y-2 bg-zinc-950 text-white">
        <DialogHeader>
          <DialogTitle>Crie uma nova tarefa</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Label htmlFor="title">Título da tarefa</Label>

          <Input type="text" id="title" placeholder="Nome da tarefa" />
        </div>

        <DialogFooter>
          <Button type="submit" className="cursor-pointer">
            Enviar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
