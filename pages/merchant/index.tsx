import React from "react"
import Layout from "@/components/layout"
import { HeadDataProps } from "@/types/headData"
import Input from "@/components/input"
import { BlackButton } from "@/components/buttons"

type Props = {}

function MerchantSignUp({}: Props) {
  const headData: HeadDataProps = {
    pageTitle: "Merchant Sign Up",
    pageDescription:
      "Sign up your small business to begin selling online to local customers today",
  }
  return (
    <Layout headData={headData}>
      <div className="flex-1 flex flex-col text-center items-center py-5">
        <h1 className="text-5xl font-bold mb-5">Merchant Sign Up</h1>
        <div className="max-w-[500px]">
          <p className="mb-4">
            {`ListIt is the buy online pickup in-store solution for
            independent retailers. It's free to make a page and begin selling.
            `}
          </p>
        </div>
        <div className="w-full max-w-[500px]">
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder="What's the name of your store?"
            label="Store Name"
          />
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder=""
            label="Store Address"
          />
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder=""
            label="Unit No."
          />
          <div className="grid grid-cols-[2fr_1fr] gap-x-5">
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
          </div>
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder=""
            label="Zip Code"
          />
          <div className="grid grid-cols-2 gap-x-5">
            <Input
              onChange={(e) => console.log(e.target.value)}
              inputClassName="w-full"
              placeholder=""
              label="First Name"
            />
            <Input
              onChange={(e) => console.log(e.target.value)}
              inputClassName="w-full"
              placeholder=""
              label="Last Name"
            />
          </div>
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full"
            inputClassName="w-full"
            placeholder=""
            label="Email"
          />
          <Input
            onChange={(e) => console.log(e.target.value)}
            containerClassName="w-full !mb-6"
            inputClassName="w-full"
            placeholder=""
            label="Phone Number"
          />
          <BlackButton
            onButtonPress={() => console.log("submit")}
            className="w-full text-xl"
          >
            Get Started
          </BlackButton>
        </div>
      </div>
    </Layout>
  )
}

export default MerchantSignUp
