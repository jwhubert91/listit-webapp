import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { HeadDataProps } from "@/types/headData"

type Props = {
  headData: HeadDataProps
}

function SEOHead({ headData }: Props) {
  const { asPath: currentPath } = useRouter()

  const {
    pageTitle,
    pageDescription,
    openGraphTitle,
    openGraphDescription,
    openGraphImageUrl,
  } = headData
  return (
    <Head>
      <title>{`${pageTitle} | ListIt.one`}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/listit-favicon.ico" />
      <meta property="og:title" content={openGraphTitle || pageTitle} />
      <meta
        property="og:description"
        content={openGraphDescription || pageDescription}
      />
      <meta property="og:image" content={openGraphImageUrl} />
      {/* Facebook Meta Tags */}
      <meta
        property="og:url"
        content={`https://www.listit.one${currentPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={openGraphImageUrl} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="listit.one" />
      <meta
        property="twitter:url"
        content={`https://www.listit.one${currentPath}`}
      />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={openGraphImageUrl} />
    </Head>
  )
}

export default SEOHead
