import React, { ReactNode } from "react"

type ButtonProps = {
  className?: string
  children: ReactNode
  onButtonPress: () => void
}

const buttonClasses = "py-2 px-10 rounded-lg text-xl"

function GoodButton({ className = "", children, onButtonPress }: ButtonProps) {
  return (
    <button
      className={`bg-spot_green hover:bg-green-500 ${buttonClasses} ${className}`}
      onClick={onButtonPress}
    >
      {children}
    </button>
  )
}

function BlackButton({ className = "", children, onButtonPress }: ButtonProps) {
  return (
    <button
      className={`text-white bg-black hover:bg-gray-900 ${buttonClasses} ${className}`}
      onClick={onButtonPress}
    >
      {children}
    </button>
  )
}

export { GoodButton, BlackButton }
