import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { HeadDataProps } from "@/types/headData"
import BlogArticle from "@/components/blogArticle"

type Props = {}

function BlogPostPage({}: Props) {
  const headerImageUrl =
    "https://images.unsplash.com/photo-1557500608-1c483bc8d90d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  const headData: HeadDataProps = {
    pageTitle: "120 Days of Retail: Day 35 - Cop-out",
    pageDescription: "The same again",
    openGraphImageUrl: headerImageUrl,
  }
  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle="120 Days of Retail: Day 35 - Cop-out"
        blogSubtitle="The same again"
        dateString="Sun Apr 9, 2023"
      >
        <>
          <p className="italic">
            This is part 35 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center mb-[30px]">
            <img src={headerImageUrl} alt="a man walking through Brooklyn" />
            <span className="text-sm">
              Photo credit{" "}
              <a
                href="https://unsplash.com/photos/NF1OsaFLMlc"
                className="underline"
                target="_none"
              >
                Avi Werde
              </a>{" "}
              via Unsplash
            </span>
          </div>
          <p>{`As the retail industry continues to evolve, small businesses must adapt to new trends and technologies to stay competitive. One of the latest trends in retail is the Buy Online Pick Up In-Store (BOPIS) option, which has seen tremendous growth in recent years. Offering BOPIS can help small retail stores stay relevant and meet the changing needs of their customers. In this article, we will discuss the benefits of BOPIS and why small retailers should consider implementing it in their stores.`}</p>
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
