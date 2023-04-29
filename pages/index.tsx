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
      <div className="flex-1 w-screen flex flex-col justify-center pb-11 homepage__heroBackground">
        <div className="max-w-[1600px] px-[40px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Local shopping in South Brooklyn
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 md:mb-11">
            Find what you need in local stores. Order online and pick up same
            day.
          </h2>
          <div className="flex flex-col items-center tablet:flex-row md:gap-x-2 md:mb-3">
            <Input
              onChange={(e) => setProductSearch(e.target.value)}
              value={productSearch}
              containerClassName="w-full max-w-[600px] mb-3 tablet:mb-0"
              inputClassName="w-full text-xl"
              placeholder="What do you need today?"
            />
            <BlackButton
              onButtonPress={() => console.log(productSearch)}
              className="w-full max-w-[600px] mb-3 md:mb-0 md:mx-auto tablet:mx-0"
            >
              Search Products
            </BlackButton>
          </div>
          <div className="w-full max-w-[600px]">
            <GoodButton
              className="mb-5 w-full"
              onButtonPress={() => router.push(PAGE_PATHS.MERCHANT_SIGN_UP)}
            >
              Merchant Sign Up
            </GoodButton>
            <p className="italic text-xl text-center">
              Currently serving zip codes: 11209, 11220, 11228
            </p>
          </div>
        </div>
      </div>
      {/* <Ticker /> */}
    </Layout>
  )
}
