import React, { useState } from "react"

// components
import Layout from "@/components/layout"
import Input from "@/components/input"
import { GoodButton } from "@/components/buttons"
import TextArea from "@/components/textArea"
import ProductImage from "@/components/productImage"

function AddProductPage() {
  const headData = {
    pageTitle: "Add product",
    pageDescription: "Add a product to your store page",
    openGraphImageUrl: "",
  }

  const [doesAddLiveProduct, setDoesAddLiveProduct] = useState(true)
  return (
    <Layout headData={headData}>
      <div className="flex-1 flex flex-col text-center items-center py-5">
        <h1 className="text-5xl font-bold mb-5">Add a Product</h1>
        <div className="max-w-[500px]">
          <p className="mb-5">
            {`Add a product to your local store page.
            `}
          </p>
        </div>
        <div className="!w-full max-w-[500px]">
          <div className="mb-1 text-left w-full">
            <label className="text-sm block mb-1">Product Photo:</label>
            <ProductImage imageUrl="" altText="" />
            <p className="text-sm italic mt-3">
              Upload a picture for this product
            </p>
            <input
              type="file"
              onChange={(e) => console.log(e)}
              className={`text-lg py-2 mb-3`}
              accept="image/*"
            />
          </div>
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder="What's the name of your product?"
            label="Product Name"
          />
          <TextArea
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder="Write a description so that shoppers can easily find this product"
            label="Product Description - 256 characters"
            maxLength={256}
          />
          {/* <div className="grid grid-cols-[2fr_1fr] gap-x-5">
            <Input
              onChange={(e) => console.log(e.target.value)}
              inputClassName="w-full"
              placeholder=""
              label="City"
            />
            <Input
              onChange={(e) => console.log(e.target.value)}
              inputClassName="w-full"
              placeholder=""
              label="State"
            />
          </div> */}
          <div className={`mb-5 text-left`}>
            <input
              type="checkbox"
              className={`px-5 py-2 mr-2 bg-black`}
              onChange={() => console.log("check!")}
              checked={doesAddLiveProduct}
            />
            <label className="text-sm">Add Product Live</label>
            <p className="text-sm italic mt-1 mb-3">
              {`Checking this box adds product live to the store page. If
              unchecked, it saves as a hidden draft.`}
            </p>
          </div>
          <GoodButton
            onButtonPress={() => console.log("submit")}
            className="w-full text-xl mb-5"
          >
            Add Product
          </GoodButton>
        </div>
      </div>
    </Layout>
  )
}

export default AddProductPage
