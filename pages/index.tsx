import Layout from "@/components/layout"
// import Ticker from "@/components/ticker"
import { HeadDataProps } from "@/types/headData"
import { useRouter } from "next/router"
import { PAGE_PATHS } from "@/utilities/constants"

export default function Home() {
  const router = useRouter()
  const pageHead: HeadDataProps = {
    pageTitle: "ListIt",
    pageDescription: "Local shopping in South Brooklyn with in store pick up",
  }
  return (
    <Layout className="relative" headData={pageHead}>
      <div
        className="flex-1 w-screen flex flex-col justify-center"
        style={{
          background: `linear-gradient(
            rgba(255, 255, 255, 0.2), 
            rgba(255, 255, 255, 0.2)
          ), url("https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="max-w-[1600px] px-[40px]">
          <h1 className="text-5xl font-bold mb-2">
            Local shopping in South Brooklyn with in store pick up
          </h1>
          <h2 className="text-2xl font-medium mb-11">
            Find what you need in local stores. Order online and pick up same
            day.
          </h2>
          <button
            className="py-3 px-10 bg-green-600 hover:bg-green-500 border-2 mx-auto mb-5"
            onClick={() => router.push(PAGE_PATHS.MERCHANTS)}
          >
            Merchant Sign Up
          </button>
          <p className="italic text-xl">
            Currently serving these Zip Codes: 11209, 11220, 11228
          </p>
        </div>
      </div>
      {/* <Ticker /> */}
    </Layout>
  )
}
