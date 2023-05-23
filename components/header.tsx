import React, { useState, useEffect } from "react"
import Link from "next/link"
import { BiMenu } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { BsGlobe2 } from "react-icons/bs"
import { PAGE_PATHS, BREAKPOINTS } from "@/utilities/constants"
import { useWindowWidth } from "@react-hook/window-size"

type Props = {
  className?: string
}

function Header({ className = "" }: Props) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const windowWidth = useWindowWidth()

  const handleNavButtonClick = () => {
    setIsMobileNavOpen((prev) => !prev)
  }

  useEffect(() => {
    if (windowWidth >= BREAKPOINTS.TABLET && isMobileNavOpen) {
      setIsMobileNavOpen(false)
    }
  }, [windowWidth])

  return (
    <div
      className={`bg-black text-white flex justify-between items-center py-2`}
    >
      <Link href="/" className="ml-3" onClick={() => setIsMobileNavOpen(false)}>
        <div className="text-2xl font-medium flex items-center">
          <BsGlobe2 className="text-white mr-3" />
          ListIt - Local Shopping
        </div>
      </Link>
      <nav className="flex tablet:gap-x-5 lg:gap-x-8 mr-3">
        <Link
          href={PAGE_PATHS.BLOG}
          className="hover:underline hidden tablet:block"
        >
          Blog
        </Link>
        <Link
          href={PAGE_PATHS.CONTACT}
          className="hover:underline hidden tablet:block"
        >
          Contact Us
        </Link>
        <button
          className="p-0 m-0 bg-none text-3xl text-white tablet:hidden"
          onClick={handleNavButtonClick}
        >
          {isMobileNavOpen ? <AiOutlineClose /> : <BiMenu />}
        </button>
      </nav>
      <div
        className={`absolute w-screen tablet:hidden p-3 h-screen top-11 flex flex-col gap-y-10 bg-black z-20 ${
          isMobileNavOpen ? "" : "hidden"
        }`}
      >
        <Link
          href={PAGE_PATHS.BLOG}
          className="hover:underline text-white text-3xl"
        >
          Blog
        </Link>
        <Link
          href={PAGE_PATHS.CONTACT}
          className="hover:underline text-white text-3xl"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default Header
