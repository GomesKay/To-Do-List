import { CircleCheck, Ellipsis } from "lucide-react"
import { TextAnimate } from "./components/magicui/text-animate"
import { ThemeSwitch } from "./components/theme-switch"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover"
import { Separator } from "./components/ui/separator"
import { ShineBorder } from "./components/magicui/shine-border"
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
} from "./components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white dark:bg-zinc-200">
      <header className="px-20 py-12 flex justify-between">
        <h2 className="font-heading text-4xl font-bold dark:text-black">
          To Do List
        </h2>

        <ThemeSwitch />
      </header>

      <main className="flex flex-col">
        <section className="pt-12 pb-64 flex flex-col items-center justify-center gap-40">
          <h1 className="font-heading text-6xl dark:text-black">
            <TextAnimate animation="slideLeft" by="character" duration={6}>
              Gerencie suas próprias tarefas.
            </TextAnimate>
          </h1>

          <div className="flex flex-col gap-6">
            <Card className="relative w-2xl bg-zinc-950 dark:bg-zinc-200 border-0">
              <ShineBorder />
              <CardContent className="text-white dark:text-black font-text flex items-center justify-between">
                <HoverCard>
                  <HoverCardTrigger className="cursor-pointer hover:underline">
                    <p>Arrumar o Quarto</p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-sm font-text bg-zinc-800 text-white">
                    <p>Tarefa criada às 09:00 de 06/07/2025</p>
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
                    <PopoverContent className="bg-zinc-800 flex flex-col gap-4 w-40">
                      <Button type="button" className="cursor-pointer">
                        Editar
                      </Button>
                      <Button
                        type="button"
                        variant="destructive"
                        className="cursor-pointer"
                      >
                        Deletar
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>

            <Card className="relative w-2xl bg-zinc-950 dark:bg-zinc-200 border-0">
              <ShineBorder />
              <CardContent className="text-white dark:text-black font-text flex items-center justify-between">
                <HoverCard>
                  <HoverCardTrigger className="cursor-pointer hover:underline">
                    <p>Limpar Setup Gamer</p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-sm font-text bg-zinc-800 text-white">
                    <p>Tarefa criada às 10:00 de 06/07/2025</p>
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
                    <PopoverContent className="bg-zinc-800 flex flex-col gap-4 w-40">
                      <Button type="button" className="cursor-pointer">
                        Editar
                      </Button>
                      <Button
                        type="button"
                        variant="destructive"
                        className="cursor-pointer"
                      >
                        Deletar
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>

            <Card className="relative w-2xl bg-zinc-950 dark:bg-zinc-200 border-0">
              <ShineBorder />
              <CardContent className="text-white dark:text-black font-text flex items-center justify-between">
                <HoverCard>
                  <HoverCardTrigger className="cursor-pointer hover:underline">
                    <p>Preparar o Almoço</p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-sm font-text bg-zinc-800 text-white">
                    <p>Tarefa criada às 11:00 de 06/07/2025</p>
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
                    <PopoverContent className="bg-zinc-800 flex flex-col gap-4 w-40">
                      <Button type="button" className="cursor-pointer">
                        Editar
                      </Button>
                      <Button
                        type="button"
                        variant="destructive"
                        className="cursor-pointer"
                      >
                        Deletar
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        <section className="flex flex-col items-center py-68 gap-20">
          <h1 className="font-heading text-6xl dark:text-black">
            <TextAnimate animation="slideLeft" by="character" duration={6}>
              Crie suas tarefas abaixo.
            </TextAnimate>
          </h1>

          <div className="flex flex-col gap-6 items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  className="w-xs cursor-pointer dark:bg-zinc-950 dark:text-white"
                >
                  Criar uma tarefa
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-zinc-950 font-text text-white space-y-2">
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

            <Card className="relative w-2xl bg-zinc-950 dark:bg-zinc-200 border-0">
              <ShineBorder />
              <CardContent className="text-white dark:text-black font-text flex items-center justify-between">
                <HoverCard>
                  <HoverCardTrigger className="cursor-pointer hover:underline">
                    <p>Fazer Bolo de Cenoura com Cobertura de Chocolate</p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-sm font-text bg-zinc-800 text-white">
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
                    <PopoverContent className="bg-zinc-800 flex flex-col gap-4 w-40">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button type="button" className="cursor-pointer">
                            Editar
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-zinc-950 font-text text-white space-y-2">
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
                        <AlertDialogContent className="bg-zinc-950 font-text">
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
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center py-12 font-heading text-md font-semibold dark:text-black">
        <h3>&copy; Feito por Caio Gomes</h3>
      </footer>
    </div>
  )
}
