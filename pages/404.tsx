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
      <>
        <h1 className="text__headerMassive">404 Page</h1>
        <h2 className="font-bold text-3xl">
          Woops! You've reached the 404 page. Go{" "}
          <Link href={PAGE_PATHS.HOME}>back to safety</Link> or let us know what
          you were looking for on the{" "}
          <Link href={PAGE_PATHS.HELP}>help page.</Link>
        </h2>
      </>
    </Layout>
  )
}

export default Custom404
