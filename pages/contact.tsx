import React from "react"
import Layout from "@/components/layout"
import { HeadDataProps } from "@/types/headData"

type Props = {}

function Contact({}: Props) {
  const headData: HeadDataProps = {
    pageTitle: "Merchant Sign Up",
    pageDescription:
      "Sign up your small business to begin selling online to local customers today",
  }
  return (
    <Layout headData={headData}>
      <div className="flex-1 flex flex-col text-center items-center">
        <h1 className="text__headerMassive mb-5">Contact Us</h1>
        <div className="flex-1 flex flex-col justify-center items-center blog__container">
          <div className="border-4 border-black p-10 text-center">
            <h2 className="font-bold text-4xl italic mb-4">
              Have something to tell us?
            </h2>
            <h3 className="font-bold text-2xl">
              Email us:{" "}
              <a href="mailto:james@listit.one" target="_blank">
                james@listit.one
              </a>
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
