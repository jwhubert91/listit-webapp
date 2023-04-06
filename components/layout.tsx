import React, { ReactNode } from "react"
import Header from "./header"
import Footer from "./footer"
import SEOHead from "./seoHead"
import { HeadDataProps } from "@/types/headData"

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
        <Header />
        <main className="flex-1 px-5 flex flex-col items-center mx-auto w-full pt-3 pb-11 layout__container">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
