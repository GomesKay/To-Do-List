"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: number
  duration?: number
  shineColor?: string | string[]
}

export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor,
  className,
  style,
  ...props
}: ShineBorderProps) {
  const [isDarkMode, setIsDarkMode] = React.useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  )

  React.useEffect(() => {
    const root = document.documentElement

    const observer = new MutationObserver(() => {
      const isDark = root.classList.contains("dark")
      setIsDarkMode(isDark)
    })

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const effectiveColor = shineColor ?? (isDarkMode ? "#000000" : "#FFFFFF")

  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: `radial-gradient(transparent, transparent, ${
            Array.isArray(effectiveColor)
              ? effectiveColor.join(",")
              : effectiveColor
          }, transparent, transparent)`,
          backgroundSize: "300% 300%",
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "motion-safe:animate-shine pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]",
        className,
      )}
      {...props}
    />
  )
}
