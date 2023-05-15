import React, { ReactNode } from "react"
import Link from "next/link"

type ButtonProps = {
  className?: string
  children: ReactNode
  onButtonPress: () => void
}

type LinkProps = {
  className?: string
  children: ReactNode
  href?: string
}

const buttonClasses = "py-2 px-10 rounded-lg text-xl"
const goodButtonClasses = "bg-spot_green hover:bg-green-500"

function GoodButton({ className = "", children, onButtonPress }: ButtonProps) {
  return (
    <button
      className={`${goodButtonClasses} ${buttonClasses} ${className}`}
      onClick={onButtonPress}
    >
      {children}
    </button>
  )
}

function GoodButtonLink({ className = "", children, href="" }: LinkProps) {
  return (
    <Link
      className={`${goodButtonClasses} ${buttonClasses} ${className}`}
      href={href}
    >
      {children}
    </Link>
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

export { GoodButton, BlackButton, GoodButtonLink }
