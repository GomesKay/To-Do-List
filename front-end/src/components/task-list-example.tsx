import { CircleCheck, Ellipsis } from "lucide-react"

import { ShineBorder } from "./magicui/shine-border"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function TaskListExample() {
  const tasks = [
    { id: 1, title: "Arrumar o Quarto" },
    { id: 2, title: "Limpar Setup Gamer" },
    { id: 3, title: "Preparar o Almoço" },
  ]

  return (
    <>
      {tasks.map((task) => (
        <Card
          key={task.id}
          className="relative w-2xl border-0 bg-zinc-950 max-[690px]:w-lg max-[535px]:w-md max-[475px]:w-sm max-[410px]:w-xs max-[335px]:w-3xs dark:bg-zinc-200"
        >
          <ShineBorder />
          <CardContent className="font-text flex items-center justify-between text-white dark:text-black">
            <p className="cursor-pointer hover:underline">{task.title}</p>

            <div className="flex gap-2">
              <Button type="button" className="cursor-pointer">
                <CircleCheck size={20} />
                <p className="max-[560px]:hidden">Marcar como concluído</p>
              </Button>

              <Button type="button" className="cursor-pointer">
                <Ellipsis size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
