import Layout from "@/components/layout"
import Image from "next/image"
// import { Inter } from "next/font/google"
// import styles from "@/styles/Home.module.css"
import Panel from "../components/panel"

export default function Home() {
  return (
    <Layout className="layout__container">
      <Panel height="full">
        <h1 className="text-5xl md:text-[150px] md:leading-[170px] font-bold mb-2">
          Local shopping in New York City
        </h1>
        <h2 className="text-3xl font-medium mb-5">
          Find what you need in local stores. Order online and pick up same day.
        </h2>
        <div className="mx-auto w-[fit-content] italic mb-10">Coming soon!</div>
        <div className="max-w-[600px] mx-auto border-4 border-black p-5">
          <p className="mb-3 text-lg">
            Merchants request to join the beta and begin listing your products
            to increase pick up orders today 📈
          </p>
          <div className="flex items-center">
            <button className="py-3 px-10 bg-green-600 hover:bg-green-500 border-2 mx-auto">
              Merchant Sign Up
            </button>
          </div>
        </div>
      </Panel>
    </Layout>
  )
}
