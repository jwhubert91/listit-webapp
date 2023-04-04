import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { HeadDataProps } from "@/types/headData"
import BlogArticle from "@/components/blogArticle"

type Props = {}

function BlogPostPage({}: Props) {
  const headData: HeadDataProps = {
    pageTitle:
      "120 Days of Retail: Day 29 - Making the Landing Page Appealing to South Brooklyn Retailers",
    pageDescription: "A quick check-in on the ListIt website homepage",
    openGraphImageUrl: "",
  }
  const router = useRouter()
  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle="120 Days of Retail: Day 29 - Making the Landing Page Appealing to
          South Brooklyn Retailers"
        blogSubtitle="A quick check-in on the ListIt website homepage"
        dateString="Sun Apr 3, 2023"
      >
        <>
          <p className="italic">
            This is part 29 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center mb-[30px]">
            <img
              src="https://images.unsplash.com/photo-1586892478025-2b5472316f22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <span className="text-sm">
              . Credit{" "}
              <a
                href="https://unsplash.com/photos/jr61kHaWKek"
                className="underline"
                target="_none"
              >
                Kelly Sikkema
              </a>{" "}
              via Unsplash
            </span>
          </div>
          <p>{`Just a quick check-in on the homepage of the ListIt website today. I know it's trash. I coded the first draft a month ago in the middle of the night and the second draft last weekend, also in the middle of the night. In truth I'm working on a project right now that's proverbially killing me, but so it goes.`}</p>
          <p>{`At the end of the day we're still at day 3 of a 90 day sprint to get this business off the ground and this landing page needs to be great if we want to attract interest. Aside from style improvements I'm thinking of how I can make the website more appealing for actual shoppers and actual retailers who don't know the aim of the project.`}</p>
          <p>{`There's this problem of having an end picture in mind but not knowing how to make it pop for the near-term users. Or rather, concisely explaining the value prop in a single sentence to both sides of the marketplace- both retailers and shoppers.`}</p>
          <p>{`If we want to be the number one website and app that retailers and shoppers think of when they think about shopping local in South Brooklyn, then making the benefit clear to them should be a top priority: in other words, other than a free digital storefront what does ListIt actually do?`}</p>
          <p>{`Let's start with the demand side of the equation since they're really the harder side of the market- the shoppers. What can ListIt do for shoppers that makes their life easier? In a sentence? ListIt is the best place to shop your neighborhood retailers for the items you need for pick-up same day. Done. Are you looking for a special tool for your home project? You should search the hardware store up the street before ordering from Amazon. Need school supplies? See if it's available at your local drugstore. Looking for N-95 masks? Let's see if there are any in stock at the local Home Depot.`}</p>
          <p>{`If people believe the demand side of the value prop, then the supply side should be simple: ListIt helps retailers list their inventory online in seconds to begin attracting more sales that same day. If you're a local business that wants to make their inventory available for online shoppers to see in one place where else can they go? They should visit ListIt. And retailers can instantly increase their visibilty this way for free, to drive more customers to their store.`}</p>
          <p>{`As for actually implementing these cool changes, that will have to wait for Wednesday night when my work project begins to wind down so I have more time. But hey- it's good to get it in writing. At least you know I'm honest!`}</p>
          <p className="font-bold">{`ListIt - Search local stores for the items you need and pick them up today.`}</p>
          <p className="font-bold">{`ListIt - List your inventory online for local shoppers and get more customers the same day.`}</p>
          <p>{`Anyway, something like that...`}</p>
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
