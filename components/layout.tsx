import React, { ReactNode } from "react"
import Header from "./header"
import Footer from "./footer"
import SEOHead from "./seoHead"
import { HeadDataProps } from "@/types/headData"
import Headroom from "react-headroom"

interface LayoutProps {
  children: ReactNode
  className?: string
  headData: HeadDataProps
}

function Layout({ children, className = "", headData }: LayoutProps) {
  return (
    <>
      <SEOHead headData={headData} />
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Headroom>
          <Header />
        </Headroom>
        <main className="flex-1 flex flex-col items-center mx-auto px-5 w-full layout__container">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
