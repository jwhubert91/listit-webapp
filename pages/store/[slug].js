import React from "react"
import Layout from "@/components/layout"
import StoreProfileCard from "@/components/storeProfileCard"
import ProductCard from "@/components/productCard"
import Input from "@/components/input"
import { BlackButton } from "@/components/buttons"
import { useState } from "react"

function StorePage() {
  const headData = {
    pageTitle: "",
    pageDescription: "",
    openGraphImageUrl: "",
  }

  const [productSearch, setProductSearch] = useState("")

  return (
    <Layout headData={headData}>
      <StoreProfileCard className="mt-5" />
      <div className="tablet:flex tablet:gap-x-1 items-center mb-4 w-full tablet:justify-center">
        <Input
          onChange={(e) => setProductSearch(e.target.value)}
          value={productSearch}
          containerClassName="w-full mb-3 tablet:mb-0 tablet:max-w-[500px]"
          inputClassName="w-full text-xl"
          placeholder="What do you need today?"
        />
        <BlackButton
          onButtonPress={() => console.log(productSearch)}
          className=""
        >
          Search Products
        </BlackButton>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 tablet:grid-cols-6 w-full mb-11">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Layout>
  )
}

export default StorePage
