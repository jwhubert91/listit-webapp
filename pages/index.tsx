import React, { useState } from "react"
import Layout from "@/components/layout"
// import Ticker from "@/components/ticker"
import { HeadDataProps } from "@/types/headData"
import { useRouter } from "next/router"
import { PAGE_PATHS } from "@/utilities/constants"
import { GoodButton, BlackButton } from "@/components/buttons"
import Input from "@/components/input"

export default function Home() {
  const router = useRouter()
  const pageHead: HeadDataProps = {
    pageTitle: "ListIt",
    pageDescription: "Local shopping in South Brooklyn with in store pick up",
  }

  const [productSearch, setProductSearch] = useState("")

  return (
    <Layout className="relative" headData={pageHead}>
      <div
        className="flex-1 w-screen flex flex-col justify-center"
        style={{
          background: `linear-gradient(
            rgba(255, 255, 255, 0.2), 
            rgba(255, 255, 255, 0.2)
          ), url("https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="max-w-[1600px] px-[40px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Local shopping in South Brooklyn
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 md:mb-11">
            Find what you need in local stores. Order online and pick up same
            day.
          </h2>
          <div className="inline">
            <Input
              onChange={(e) => setProductSearch(e.target.value)}
              value={productSearch}
              containerClassName="w-full max-w-[600px]"
              inputClassName="w-full"
              placeholder="What do you need today?"
            />
            <BlackButton onButtonPress={() => console.log(productSearch)}>
              Search Products
            </BlackButton>
          </div>
          <GoodButton
            className="mb-5"
            onButtonPress={() => router.push(PAGE_PATHS.MERCHANTS)}
          >
            Merchant Sign Up
          </GoodButton>
          <p className="italic text-xl">
            Currently serving these Zip Codes: 11209, 11220, 11228
          </p>
        </div>
      </div>
      {/* <Ticker /> */}
    </Layout>
  )
}
