import React, { ReactNode } from "react"

interface PanelProps {
  height?: "half" | "full"
  width?: "container" | "full"
  children: ReactNode
  className?: string
}

function Panel({
  height = "half",
  width = "container",
  children,
  className = "",
}: PanelProps) {
  return (
    <div
      className={`py-3 px-10 ${
        height == "half" ? "panel__half" : "panel__full"
      } ${width == "container" ? "layout__container" : "w-full"} ${className}`}
    >
      {children}
    </div>
  )
}

export default Panel
