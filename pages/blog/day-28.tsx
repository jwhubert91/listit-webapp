import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { HeadDataProps } from "@/types/headData"

type Props = {}

function BlogPostPage({}: Props) {
  const headData: HeadDataProps = {
    pageTitle: "120 Days of Retail: Day 28 - A 90 day launch plan for ListIt",
    pageDescription:
      "Mapping the plan for a public launch of ListIt for shopping in Bay Ridge, Brooklyn",
    openGraphImageUrl: "",
  }
  return (
    <Layout headData={headData}>
      <div className="blog__container">
        <h1 className="font-bold text-gray-800 text-3xl leading-tight mb-1">
          120 Days of Retail: Day 28 - A 90 day launch plan for ListIt
        </h1>
        <h2 className="text-gray-500 text-xl mb-5">
          Mapping the plan for a public launch of ListIt for shopping in Bay
          Ridge, Brooklyn
        </h2>
        <span className="text-sm text-gray-500 mb-6 block">
          Sun Apr 2, 2023
        </span>
        <div className="text-lg font-serif text-gray-700 leading-relaxed">
          <p className="italic">
            This is part 28 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center mb-[30px]">
            <img
              src="https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="rocket takeoff"
            />
            <span className="text-sm">
              A rocket taking off from Florida. Credit{" "}
              <a
                href="https://unsplash.com/photos/-p-KCm6xB9I"
                className="underline"
                target="_none"
              >
                SpaceX
              </a>{" "}
              via Unsplash
            </span>
          </div>
          <p>
            {`No super long post today but just a note that last week I worked to generate a 90 day launch plan for ListIt which narrows down the first neighborhood to work with as Bay Ridge, where I live.`}
          </p>
          <p>{`From April 1 to April 10 I'll be writing down competitors, doing market research, figuring out the target audience, and finding local retailers. I'll also be planning the app's features, functionality, and design based on user feedback. Lastly, I'll create a development plan for the code.`}</p>
          <p>{`From April 11 to April 30 we enter the development and code phase. I'll start building the app with NextJS. I'll test the app with a small group of local retailers and shoppers to identify bug and issues. And I'll incorporate that feedback into the next development cycle and to fine tune the produce.`}</p>
          <p>{`From May 1 to May 30 I'll be doing marketing and user acquisition. So I'll improve the website to be more public facing. Make flyers and posters and maybe even brochures for retailers in my neighborhood. And I'll chat with community groups and promote the product at community events.`}</p>
          <p>{`The final 30 days, or from May 31 to July 1 will be the launch and growth phase. I'll launch the app officially and start onboarding retailers. I'll launch a promotional campaign to attact local shoppers likely using Facebook ads and maybe local newspapers. I'll get into analytics as much as possible and monitor user feedback, and begin adding features to the development cycle. Lastly I'll begin plans to expand to other South Brooklyn neighborhoods like Sunset Park- another favorite locale right next to me with more awesome small shops like at Industy City!`}</p>
          <p className="italic">
            {`ListIt is a free app that allows retailers to sell to local shoppers
            as easily as posting to Instagram. Like it? Dislike it? Simply have
            questions? Reach out to me directly at james@listit.one and be sure
            to check out our website for updates and the beta product sign-up-
            coming this week!`}
          </p>
        </div>
        <hr className="border-gray-300" />
      </div>
    </Layout>
  )
}

export default BlogPostPage
