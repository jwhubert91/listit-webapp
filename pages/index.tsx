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
          <div className="tablet:flex tablet:gap-x-5 items-center mb-11">
            <Input
              onChange={(e) => setProductSearch(e.target.value)}
              value={productSearch}
              containerClassName="w-full max-w-[600px] mb-3 tablet:mb-0"
              inputClassName="w-full"
              placeholder="What do you need today?"
            />
            <BlackButton onButtonPress={() => console.log(productSearch)}>
              Search Products
            </BlackButton>
          </div>
          <GoodButton
            className="mb-5"
            onButtonPress={() => router.push(PAGE_PATHS.MERCHANT_SIGN_UP)}
          >
            Merchant Sign Up
          </GoodButton>
          <p className="italic text-xl">
            Currently serving zip codes: 11209, 11220, 11228
          </p>
        </div>
      </div>
      {/* <Ticker /> */}
    </Layout>
  )
}
