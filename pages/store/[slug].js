import React from "react"
import Layout from "@/components/layout"
import StoreProfileCard from "@/components/storeProfileCard"
import ProductCard from "@/components/productCard"

function StorePage() {
  const headData = {
    pageTitle: "",
    pageDescription: "",
    openGraphImageUrl: "",
  }
  return (
    <Layout headData={headData}>
      <StoreProfileCard className="mt-5" />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 tablet:grid-cols-6 w-full mb-11">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Layout>
  )
}

export default StorePage
