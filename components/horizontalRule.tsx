import React from "react"

interface HorizontalRuleProps {
  className?: string
  color?: string
}

function HorizontalRule({ color = "", className = "" }: HorizontalRuleProps) {
  const styleClasses = `h-[2px] bg-${color} ${className}`
  return <div className={styleClasses}></div>
}

export default HorizontalRule
