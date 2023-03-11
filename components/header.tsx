import React, { useState } from "react"
import Link from "next/link"
import { BiMenu } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

type Props = {
  className?: string
}

function Header({ className = "" }: Props) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const handleNavButtonClick = () => {
    setIsMobileNavOpen((prev) => !prev)
  }

  return (
    <div
      className={`bg-black text-white flex justify-between items-center py-2`}
    >
      <Link href="/" className="ml-3">
        <div className="text-2xl font-medium">ListIt - Local Shopping</div>
      </Link>
      <nav className="flex md:gap-x-5 lg:gap-x-8 mr-3">
        <Link href="/merchants" className="hover:underline hidden md:block">
          Merchant Sign Up
        </Link>
        <Link href="/blog" className="hover:underline hidden md:block">
          Blog
        </Link>
        <Link href="/contact" className="hover:underline hidden md:block">
          Help
        </Link>
        <button
          className="p-0 m-0 bg-none text-3xl text-white md:hidden"
          onClick={handleNavButtonClick}
        >
          {isMobileNavOpen ? <AiOutlineClose /> : <BiMenu />}
        </button>
      </nav>
      <div
        className={`absolute w-screen p-3 h-screen top-11 flex flex-col gap-y-10 bg-black z-20 ${
          isMobileNavOpen ? "" : "hidden"
        }`}
      >
        <Link
          href="#merchant"
          className="hover:underline text-white text-3xl mt-11"
        >
          Merchant Sign Up
        </Link>
        <Link href="/blog" className="hover:underline text-white text-3xl">
          Blog
        </Link>
        <Link href="#contact" className="hover:underline text-white text-3xl">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
