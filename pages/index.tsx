import Layout from "@/components/layout"
import Ticker from "@/components/ticker"
import Image from "next/image"
// import { Inter } from "next/font/google"
// import styles from "@/styles/Home.module.css"
import Panel from "../components/panel"
import { HeadDataProps } from "@/types/headData"
import { useRouter } from "next/router"
import { PAGE_PATHS } from "@/utils/constants"

export default function Home() {
  const router = useRouter()
  const pageHead: HeadDataProps = {
    pageTitle: "Home",
    pageDescription: "Shop Local in South Brooklyn",
  }
  return (
    <Layout className="layout__container" headData={pageHead}>
      <div className="text-center flex flex-col items-center">
        <h1 className="text__headerMassive mb-5">
          Local shopping in South Brooklyn
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-5">
          Find what you need in local stores in Bay Ridge. Order online and pick
          up same day.
        </h2>
        <div className="mx-auto w-[fit-content] italic mb-10">
          Check back soon. Coming April 2023!
        </div>
        <div className="max-w-[600px] mx-auto border-4 border-black p-5 mb-[100px] lg:mb-0">
          <p className="mb-3 text-lg">
            Merchants request to join the beta and begin listing your products
            to increase pick up orders today 📈
          </p>
          <div className="flex justify-center">
            <button
              className="py-3 px-10 bg-green-600 hover:bg-green-500 border-2 mx-auto"
              onClick={() => router.push(PAGE_PATHS.MERCHANTS)}
            >
              Merchant Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* <Ticker /> */}
    </Layout>
  )
}
