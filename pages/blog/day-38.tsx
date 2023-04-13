import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { HeadDataProps } from "@/types/headData"
import BlogArticle from "@/components/blogArticle"

type Props = {}

function BlogPostPage({}: Props) {
  const headerImageUrl =
    "https://image.cnbcfm.com/api/v1/image/104313205-4ED5-SA-UBER-CALACANIS-030117.jpg?v=1529474358&w=750&h=422&vtcrop=y"
  const headData: HeadDataProps = {
    pageTitle:
      "120 Days of Retail: Day 38 - Early Investor in Uber Prefers to Pick Up In-Store!",
    pageDescription:
      "On a recent episode of This Week in Startups, early Uber investor Jason Calacanis says he prefers to pick up his meals than get them delivered",
    openGraphImageUrl: headerImageUrl,
  }
  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle={headData.pageTitle}
        blogSubtitle={headData.pageDescription}
        dateString="Wed Apr 12, 2023"
      >
        <>
          <p className="italic">
            This is part 38 of a 120 day series on validating our product
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
              Jason Calacanis (left) was an early investor in Uber. Photo Photo
              credit{" "}
              <a
                href="https://www.cnbc.com/2017/03/01/uber-ceo-travis-kalanick-needs-to-stop-self-inflicted-wounds-jason-calacanis.html"
                className="underline"
                target="_none"
              >
                CNBC
              </a>{" "}
            </span>
          </div>
          <p>{`I already feel bad doing this to my boy Jason Calacanis. I’ve been listening to podcasts by him for years and feel he can be a great source of insider information for Silicon Valley and the tech industry. It should also be noted that Jason is originally from Bay Ridge, Brooklyn, which is coincidentally where I’m starting my business ListIt.`}</p>
          <p>{`That said I could help but hear in yesterday’s episode of This Week in Startups, Jason’s popular technology investing podcast, that he’s grown skeptical of the delivery fees that companies like Uber charge and has recently opted for ordering online and picking up at the restaurant! This statement felt like it had an unusually large amount of gravitas given that it came from one of the actual early investors in Uber.`}</p>
          <p>{`In the late 2000’s when Travis Kalanick, Uber’s founder and CEO for many years, was seeking venture funding in its very early years of operation, Jason sourced the VC deal with Uber for his previous employer Sequoia, which is one of Silicon Valley’s largest tech investors. Calacanis found the company and helped secure that deal for Kalanick.`}</p>
          <p>{`In yesterday, April 11th, 2023’s episode of This Week in Startups Jason said discussing Uber,  (which is currently in the top 10 of Apple’s tech podcast charts) Jason noted “people right now are looking at Uber Eats and DoorDash and they look at that bill and they see a $25 tip… some people are saying, you know what, maybe I'll just go pick it up.”`}</p>
          <p>{`He then goes on to say he normally gets his food delivered with Uber Eats. However, coming from one of the early investors in Uber this was a surprisingly positive endorsement of Buy Online Pickup In-Store (BOPIS). While my company ListIt is focusing more on retail than on food, it’s important to note that this is an increasingly important option for the price sensitive, for those who prefer to try things before they buy, and for those who don’t want to wait days or weeks for their items to arrive in the mail.`}</p>
          <p>{`There’s a reason that Google searches for terms like “pick up in store” have been on the rise in recent years, and why after implementing BOPIS, according to a survey by Adobe, retailers experienced a 119% increase in year-over-year online sales. A surprising statistic that I keep coming back to is that between 80 and 85% of retail sales still happen in-store, which is why having the ability to allow shoppers to purchase online for pickup is so important. Furthermore it represents a rare opportunity for local businesses to succeed and even beat the online megastores- using the asset that e-commerce stores don't have- a presence in the community.`}</p>
          <p className="italic">
            {`ListIt is the Buy Online Pickup In-Store solution for local retailers it’s free and takes only seconds to upload your first product. We’re launching April 2023. Have questions? Reach out to me directly at james@listit.one`}
          </p>
        </>
      </BlogArticle>
    </Layout>
  )
}

export default BlogPostPage
