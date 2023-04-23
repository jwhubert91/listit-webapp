import React, { ReactNode } from "react"

type ButtonProps = {
  className?: string
  children: ReactNode
  onButtonPress: () => void
}

function GoodButton({ className = "", children, onButtonPress }: ButtonProps) {
  return (
    <button
      className={`py-3 px-10 bg-spot_green hover:bg-green-500 rounded-xl mx-auto ${className}`}
      onClick={onButtonPress}
    >
      {children}
    </button>
  )
}

function BlackButton({ className = "", children, onButtonPress }: ButtonProps) {
  return (
    <button
      className={`py-3 px-10 text-white bg-black hover:bg-gray-900 rounded-xl mx-auto ${className}`}
      onClick={onButtonPress}
    >
      {children}
    </button>
  )
}

export { GoodButton, BlackButton }
