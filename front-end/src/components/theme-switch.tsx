import { useEffect, useState } from "react"

import { Switch } from "./ui/switch"

export function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement

    if (isDarkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <Switch
      className="dark:bg-black"
      checked={isDarkMode}
      onCheckedChange={setIsDarkMode}
    />
  )
}
