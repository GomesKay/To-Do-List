import axios from "axios"
import { CircleCheck, CircleCheckBig, Ellipsis } from "lucide-react"
import { toast } from "sonner"

import type { TaskCardProps } from "@/types/task"

import { DeleteTaskAlertDialog } from "./delete-task-alert-dialog"
import { ShineBorder } from "./magicui/shine-border"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { UpdateTaskDialog } from "./update-task-dialog"

export function TaskCard({ tasks, onTaskChanged }: TaskCardProps) {
  async function handleUpdateCompletedTask(id: string) {
    try {
      await axios.patch(`http://localhost:3333/tasks/${id}/completed`)

      toast.success("Tarefa concluída")

      onTaskChanged()
    } catch (error) {
      console.error("Erro ao completar tarefa:", error)
    }
  }

  return (
    <>
      {tasks.length ? (
        tasks.map((task) => (
          <Card
            key={task.id}
            className="relative w-2xl border-0 bg-zinc-950 max-[690px]:w-lg max-[535px]:w-md max-[475px]:w-sm max-[410px]:w-xs max-[335px]:w-3xs dark:bg-zinc-200"
          >
            <ShineBorder />
            <CardContent className="font-text flex items-center justify-between text-white max-[350px]:flex-col max-[350px]:gap-2 dark:text-black">
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer hover:underline">
                  <p>{task.title}</p>
                </HoverCardTrigger>
                <HoverCardContent className="font-text w-sm bg-zinc-800 text-white">
                  <p>
                    Tarefa criada às{" "}
                    {new Date(task.createdAt).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    de {new Date(task.createdAt).toLocaleDateString("pt-BR")}
                  </p>
                </HoverCardContent>
              </HoverCard>

              <div className="flex gap-2">
                {task.completed ? (
                  <p className="flex items-center gap-2 font-semibold text-green-400">
                    <CircleCheckBig size={20} />
                    <p className="max-[475px]:hidden">Concluída</p>
                  </p>
                ) : (
                  <Button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => {
                      handleUpdateCompletedTask(task.id)
                    }}
                  >
                    <CircleCheck size={20} />
                    <p className="max-[560px]:hidden">Marcar como concluído</p>
                  </Button>
                )}

                <Popover>
                  <PopoverTrigger asChild>
                    <Button type="button" className="cursor-pointer">
                      <Ellipsis size={20} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="flex w-40 flex-col gap-4 bg-zinc-800">
                    <UpdateTaskDialog
                      taskId={task.id}
                      onTaskChanged={onTaskChanged}
                    />

                    <DeleteTaskAlertDialog
                      task={task}
                      onTaskChanged={onTaskChanged}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="font-text">Nenhuma tarefa encontrada</p>
      )}
    </>
  )
}
