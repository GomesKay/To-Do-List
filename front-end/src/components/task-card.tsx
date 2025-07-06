import { CircleCheck, Ellipsis } from "lucide-react"

import { ShineBorder } from "./magicui/shine-border"
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
import { Card, CardContent } from "./ui/card"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export function TaskCard() {
  return (
    <Card className="relative w-2xl border-0 bg-zinc-950 dark:bg-zinc-200">
      <ShineBorder />
      <CardContent className="font-text flex items-center justify-between text-white dark:text-black">
        <HoverCard>
          <HoverCardTrigger className="cursor-pointer hover:underline">
            <p>Fazer Bolo de Cenoura com Cobertura de Chocolate</p>
          </HoverCardTrigger>
          <HoverCardContent className="font-text w-sm bg-zinc-800 text-white">
            <p>Tarefa criada às 14:00 de 06/07/2025</p>
          </HoverCardContent>
        </HoverCard>

        <div className="flex gap-2">
          <Button type="button" className="cursor-pointer">
            <CircleCheck size={20} />
            Marcar como concluído
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button type="button" className="cursor-pointer">
                <Ellipsis size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-40 flex-col gap-4 bg-zinc-800">
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

                  <div className="flex flex-col gap-4">
                    <Label htmlFor="title">Título da tarefa</Label>

                    <Input
                      type="text"
                      id="title"
                      placeholder="Nome da tarefa"
                    />
                  </div>

                  <DialogFooter>
                    <Button type="submit" className="cursor-pointer">
                      Enviar
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    type="button"
                    variant="destructive"
                    className="cursor-pointer"
                  >
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
                    <AlertDialogAction>Continuar</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  )
}
