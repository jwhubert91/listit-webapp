import Layout from "@/components/layout"
import Image from "next/image"
// import { Inter } from "next/font/google"
// import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className="">
        <div className="text-3xl">Local shopping in New York City</div>
        <div>
          Find what you need in local stores. Order online and pick up same day.
        </div>
        <div>Coming soon!</div>
        <div id="#merchants">
          <div>
            Merchants request to join the beta and begin listing your products
            to increase pick up orders today 📈
          </div>
          <button>Merchant Sign Up</button>
        </div>
      </div>
    </Layout>
  )
}
