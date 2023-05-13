import React from "react"
import Layout from "@/components/layout"
import StoreProfileCard from "@/components/storeProfileCard"
import ProductCard from "@/components/productCard"
import Input from "@/components/input"
import { GoodButton } from "@/components/buttons"
import { useState } from "react"
import {useRouter} from "next/router"
import {} from ""

function StorePage() {
  const headData = {
    pageTitle: "",
    pageDescription: "",
    openGraphImageUrl: "",
  }

  let isMerchant = true
  const storeProducts = []

  const router = useRouter()

  const [productSearch, setProductSearch] = useState("")

  return (
    <Layout headData={headData}>
      <StoreProfileCard className="mt-5" isMerchant={isMerchant} />
      {storeProducts.length > 0 ? (
        <>
          <div className="flex flex-col mb-6 md:flex-row md:gap-x-2 items-center w-full tablet:justify-center">
            <Input
              onChange={(e) => setProductSearch(e.target.value)}
              value={productSearch}
              containerClassName="w-full tablet:max-w-[500px] mb-3 md:!mb-0"
              inputClassName="w-full text-xl"
              placeholder="What do you need today?"
            />
            <BlackButton
              onButtonPress={() => console.log(productSearch)}
              className="text-base w-[300px] md:text-lg"
            >
              Search Products
            </BlackButton>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 tablet:grid-cols-6 w-full mb-11">
            {/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </>
      ) : (
        <div className="w-full text-center">
          <p>There are currently no products listed.</p>
          {isMerchant && (
            <GoodButton
              className="mt-3 w-full max-w-[600px]"
              onButtonPress={router.push("/add")}
            >
              Add your first product
            </GoodButton>
          )}
        </div>
      )}
    </Layout>
  )
}

export default StorePage
