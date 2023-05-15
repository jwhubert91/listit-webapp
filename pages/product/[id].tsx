import React from "react"

// packages
import { useRouter } from "next/router"

// components
import Layout from "@/components/layout"
import { BlackButton } from "@/components/buttons"
import ProductImage from "@/components/productImage"

// utilties
import { PAGE_PATHS } from "@/utilities/constants"
import Link from "next/link"

function StoreEdit() {
  const headData = {
    pageTitle: "Store Profile Edit",
    pageDescription: "Edit your store profile",
  }

  const router = useRouter()

  function handleSubmit() {
    console.log("Submitted")
    router.push(`${PAGE_PATHS.STORE}/slug`)
  }

  return (
    <Layout headData={headData}>
      <div className="flex-1 flex flex-col w-full text-center items-center py-5">
        <div className="w-full max-w-[500px] mb-3 text-left">
          <ProductImage
            imageUrl=""
            altText=""
            className="w-full h-auto aspect-square mb-3"
          />
          <p className="">
            <Link href="/store/123">Store Name</Link>
          </p>
          <h3 className="font-bold text-3xl mb-1">Product Name</h3>
          <p className="mb-5">Product description...</p>
          <BlackButton
            onButtonPress={() => console.log("submit")}
            className="w-full text-xl"
          >
            Add to Cart
          </BlackButton>
        </div>
      </div>
    </Layout>
  )
}

export default StoreEdit
