import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { HeadDataProps } from "@/types/headData"
import BlogArticle from "@/components/blogArticle"

type Props = {}

function BlogPostPage({}: Props) {
  const headerImageUrl =
    "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  const headData: HeadDataProps = {
    pageTitle:
      "120 Days of Retail: Day 36 - An all-new slogan for ListIt, and new verbiage for the site",
    pageDescription:
      "Refreshing how we explain the service to retailers to include the value-add to them",
    openGraphImageUrl: headerImageUrl,
  }
  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle="120 Days of Retail: Day 36 - An all-new slogan for ListIt, and new verbiage for the site"
        blogSubtitle="Refreshing how we explain the service to retailers to include the value-add to them"
        dateString="Mon Apr 10, 2023"
      >
        <>
          <p className="italic">
            This is part 36 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center mb-[30px]">
            <img src={headerImageUrl} alt="" />
            <span className="text-sm">
              Photo credit{" "}
              <a
                href="https://unsplash.com/photos/EeS69TTPQ18"
                className="underline"
                target="_none"
              >
                Samantha Borges
              </a>{" "}
              via Unsplash
            </span>
          </div>
          <p>{`Ok so I know yesterday's blog post was a wash. The truth is it was written in the middle of the night after spending hours coding for a work project. I'm hoping that project will be finished this week so I can move on to ListIt semi-full time. For now, let's discuss the new site verbiage.`}</p>
          <p>{`After doing some market research this last week to focus on some of the pain points around implementing buy-online pick up in-store for retailers, I realized how big the problem was. I had previously been thinking ListIt would be best explained as "your retail store's free online web presence"- which it is. But more importantly for retailers its value add can maybe be better explained as "the buy-online-pickup-in-store (BOPIS) solution for independent retailers". In fact I went ahead and already changed that explanation on the Merchants page.`}</p>
          <p>{`The new verbiage doesn't change anything about what the company actually does, but it does make it easier to understand for independent store managers and retailers who are going to be using ListIt. How can this help you increase sales? That's the explanation.`}</p>
          <p>{`Shopper demand for buy online pickup in-store has increased about 15% each year for the last 10 years with no sign of slowing down, and online searches for it have increased 900% since 2021! That's not just the covid bump either, it was for 2022 as well.`}</p>
          <p>
            {`By branding ourselves as `}
            <span className="font-bold">{`the free buy-online-pickup-in-store (BOPIS) solution for independent retailers `}</span>
            {`we're able to clearly articulate how we're helping them reach shoppers.`}
          </p>
          <p>{`Lastly, we're going to shift to focusing on a few important keywords that Google's Adword Keyword research tool uncovered to help retailers find ListIt online. The following keywords are part of our core business, are popular or growing in popularity year-over-year, and aren't too competitive. Maybe no one will find us if they search "online shopping", but these will help give us a better chance:`}</p>
          <ul className="mb-10 list-disc">
            <li>
              <h3 className="font-bold inline">in store pick</h3> -{" "}
              {`Searches
              increased 900% YoY`}
            </li>
            <li>
              <h3 className="font-bold inline">local stores</h3> - Where we
              specialize!
            </li>
            <li>
              <h3 className="font-bold inline">order for pick up</h3> - Also a
              good description of what we do.
            </li>
            <li>
              <h3 className="font-bold inline">in store pick up stores</h3> -
              Clearly people are searching for this kind of thing
            </li>
            <li>
              <h3 className="font-bold inline">shop pick</h3> - What else could
              this be? Unclear but obviously related
            </li>
            <li>
              <h3 className="font-bold inline">store with pick up</h3> -{" "}
              {`It's
              pretty cool people are searching for this honestly`}
            </li>
          </ul>
          <p className="italic">
            {`ListIt is a free app that allows retailers to sell to local shoppers
            as easily as posting to Instagram. Like it? Dislike it? Simply have
            questions? Reach out to me directly at james@listit.one and be sure
            to check out our website for updates and the beta product sign-up-
            coming this week!`}
          </p>
        </>
      </BlogArticle>
    </Layout>
  )
}

export default BlogPostPage
