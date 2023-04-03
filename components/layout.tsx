import React, { ReactElement } from "react"
import Head from "next/head"
import Header from "./header"
import Footer from "./footer"
import { HeadDataProps } from "@/types/headData"

interface LayoutProps {
  children: ReactElement
  className?: string
  headData: HeadDataProps
}

function Layout({ children, className = "", headData }: LayoutProps) {
  const {
    pageTitle,
    pageDescription,
    openGraphTitle,
    openGraphDescription,
    openGraphImageUrl,
  } = headData
  console.log(pageTitle)
  return (
    <>
      <Head>
        <title>{`${pageTitle} | ListIt.one`}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={openGraphTitle || pageTitle} />
        <meta
          property="og:description"
          content={openGraphDescription || pageDescription}
        />
        <meta property="og:image" content={openGraphImageUrl} />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-1 px-5 flex justify-center mx-auto w-full pt-3 pb-11 layout__container">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
