import React from "react"

interface LinkProps {
  className?: string
  href: string
}

const link = ({ className = "", href = "" }: LinkProps) => {
  return <div>link</div>
}

export default link
