import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { HeadDataProps } from "@/types/headData"
import BlogArticle from "@/components/blogArticle"

type Props = {}

function BlogPostPage({}: Props) {
  const headData: HeadDataProps = {
    pageTitle: "120 Days of Retail: Day 33 - How Not to Invent a Horse",
    pageDescription:
      "A discussion of user testing on the cusp of a totally new retail concept",
    openGraphImageUrl:
      "https://th-thumbnailer.cdn-si-edu.com/PiL_TdI71UP7a7w818Lp-7DB4YE=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b7/1e/b71e206b-df4a-4d9e-958a-1a249c544c6e/the_horse_in_motion_2_resized.jpg",
  }
  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle="120 Days of Retail: Day 33 - How Not to Invent a Horse"
        blogSubtitle="A discussion of user testing on the cusp of a totally new retail concept"
        dateString="Fri Apr 7, 2023"
      >
        <>
          <p className="italic">
            This is part 33 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center mb-[30px]">
            <img
              src="https://th-thumbnailer.cdn-si-edu.com/PiL_TdI71UP7a7w818Lp-7DB4YE=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b7/1e/b71e206b-df4a-4d9e-958a-1a249c544c6e/the_horse_in_motion_2_resized.jpg"
              alt="the first motion picture ever made was of a galloping horse in 1878"
            />
            <span className="text-sm">
              . Credit{" "}
              <a
                href="https://www.smithsonianmag.com/smithsonian-institution/how-19th-century-photographer-first-gif-galloping-horse-180970990/"
                className="underline"
                target="_none"
              >
                Library of Congress
              </a>
            </span>
          </div>
          <p>{`There's a famous quote of Henry Ford's, which he may or may not have said, but anyway the quote is “If I had asked people what they wanted, they would have said faster horses.” This sentiment is on his views about collecting user feedback before you create something.`}</p>
          <p>{`Of course he's probably right about his first car and his first popular car the Model A. If Ford had gone house to house in the late 1800s trying to sell everyday people on a wood and metal contraption that you pour a type of kerosine into just to go to the store, they probably would have said no.`}</p>
          <p>{`I think the problem with asking for customer feedback before creating something is that people- including very smart people- tend to think by analogy. This is the reason that rather than describing yourself as just a payment system, for example, a founder might call themselves "Airbnb for Bank Accounts". It's easier to imagine what we know.`}</p>
          <p>{`That said, it's probably best we get some criteria together for a great first few retailers in South Brooklyn to discuss the ListIt idea with when a prototype is ready.`}</p>
          <ul>
            <li>1. They should be a retailer, not a restaurant or cafe</li>
            <li>2. They should have either no website or a minimal website</li>
            <li>
              3. They should have some social media presence- either Instagram
              or Facebook or TikTok
            </li>
            <li>
              4. They should be loved by the neighborhood{" "}
              {`(or at least seem like they are from the outside- this one's subjective 😉)`}
            </li>
          </ul>
          <br />
          <p>
            {`Luckily I was able to find a handy directory for many of Bay Ridge's retail businesses here: `}
            <a href="https://www.bayridgebid.com/directory">
              Bay Ridge business directory
            </a>
            {` where you can filter by type of business including retail. So it's a good starting point to see who's on there. Hopefully I'll get some time to chat some owners and employees up this weekend about how a service like ListIt could make their lives easier by selling to local customers online. Hopefully it won't seem as though we're just trying to invent a faster horse for their already too-complex online presence.`}
          </p>
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
