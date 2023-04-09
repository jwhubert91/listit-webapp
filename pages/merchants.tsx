import React from "react"
import Layout from "@/components/layout"
import { HeadDataProps } from "@/types/headData"

type Props = {}

function Merchants({}: Props) {
  const headData: HeadDataProps = {
    pageTitle: "Merchant Sign Up",
    pageDescription:
      "Sign up your small business to begin selling online to local customers today",
  }
  return (
    <Layout headData={headData}>
      <div className="flex-1 flex flex-col text-center items-center">
        <h1 className="text__headerMassive mb-5">Merchant Sign Up</h1>
        <div className="blog__container">
          <p className="mb-10 text-2xl">
            ListIt is the buy-online-pickup-in-store (BOPIS) solution for
            independent retailers. It's free to make a page and begin selling.
            We'll never charge you a dime<sup className="text-red-500">*</sup>
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center blog__container">
          <div className="border-4 border-black p-10 text-center">
            <h2 className="font-bold text-4xl italic mb-4">
              Interested in selling with us?
            </h2>
            <h4 className="mb-4 text-2xl">
              Sign up to participate in the beta and be among the first to list
              your business online for free.
            </h4>
            <h3 className="font-bold text-2xl">
              Email us to join the beta:{" "}
              <a href="mailto:james@listit.one" target="_blank">
                james@listit.one
              </a>
            </h3>
          </div>
        </div>
        <p className="text-sm">
          <sup className="text-red-500">*</sup> ListIt generates revenue by
          adding a miniscule amount to the online sale price when a purchase is
          made. We are currently under development but will be releasing to a
          select group of South Brooklyn retailers April 2023.
        </p>
      </div>
    </Layout>
  )
}

export default Merchants
