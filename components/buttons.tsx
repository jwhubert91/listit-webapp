import React from "react"

type ButtonProps = {
  className?: string
  title: string
  onButtonPress: () => void
}

function GoodButton({
  className = "",
  title = "",
  onButtonPress,
}: ButtonProps) {
  return (
    <button
      className="py-3 px-10 bg-green-600 hover:bg-green-500 border-2 mx-auto"
      onClick={onButtonPress}
    >
      {title}
    </button>
  )
}

export { GoodButton }
