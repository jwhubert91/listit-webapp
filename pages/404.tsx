import React from "react"
import Layout from "@/components/layout"
import Link from "next/link"
import { PAGE_PATHS } from "@/utils/constants"

type Props = {}

function Custom404({}: Props) {
  const headData = {
    pageTitle: "404",
    pageDescription: "You've reached the ListIt 404 page.",
  }
  return (
    <Layout headData={headData}>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text__headerMassive mb-11">404 Page</h1>
        <h2 className="font-bold text-3xl">
          {"Woops! You've reached the 404 page. Go "}
          <Link href={PAGE_PATHS.HOME}>back to safety</Link> or let us know what
          you were looking for on the{" "}
          <Link href={PAGE_PATHS.CONTACT}>help page.</Link>
        </h2>
      </div>
    </Layout>
  )
}

export default Custom404
