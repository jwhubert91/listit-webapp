import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { HeadDataProps } from "@/types/headData"
import BlogArticle from "@/components/blogArticle"

type Props = {}

function BlogPostPage({}: Props) {
  const headData: HeadDataProps = {
    pageTitle: "120 Days of Retail: Day 30 - Installed Google Analytics",
    pageDescription: "Just checking in",
    openGraphImageUrl: "",
  }
  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle="120 Days of Retail: Day 30 - Installed Google Analytics"
        blogSubtitle="Just checking in"
        dateString="Tue Apr 4, 2023"
      >
        <>
          <p className="italic">
            This is part 30 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center mb-[30px]">
            <img
              src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <span className="text-sm">
              . Credit{" "}
              <a
                href="https://unsplash.com/photos/eveI7MOcSmw"
                className="underline"
                target="_none"
              >
                Kelly Sikkema
              </a>{" "}
              via Unsplash
            </span>
          </div>
          <p>{`Nothing too detailed happened today per the site. Just installed Google Analytics using GA4 rather than the old Universal Analytics. Exciting stuff. Hopefully a longer update tomorrow 🤞`}</p>
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
