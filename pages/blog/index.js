import Layout from "@/components/layout"
import React from "react"
import BlogCard from "@/components/blogCard"
import LegacyBlogPosts from "@/components/legacyBlogPosts"
import { sanityClient } from "@/lib/sanity"
import {
  publishDateString,
  getSanityImageUrl,
} from "@/utilities/helperFunctions"

function BlogOverviewPage({ sanityBlogPosts }) {
  const headData = {
    pageTitle: "Blog",
    pageDescription: "Blog Posts for Listit.one",
  }

  console.log(sanityBlogPosts)

  return (
    <Layout headData={headData}>
      <div>
        <h1 className="text__headerMassive mt-2 mb-11 text-center">
          ListIt Blog 🛍
        </h1>
        <div className="flex flex-col gap-y-5 blog__width">
          {sanityBlogPosts &&
            sanityBlogPosts.map((sanityBlogPost, idx) => {
              const sanityMainImageUrl = getSanityImageUrl(
                sanityBlogPost.mainImage.image
              ).url()
              return (
                <BlogCard
                  key={idx}
                  slug={`/blog/${sanityBlogPost.slug.current}`}
                  imageUrl={sanityMainImageUrl}
                  date={publishDateString(sanityBlogPost.publishDate)}
                  title={sanityBlogPost.title}
                  subtitle={sanityBlogPost.subtitle}
                  isLocalImage={false}
                />
              )
            })}
          <LegacyBlogPosts />
        </div>
      </div>
    </Layout>
  )
}

export default BlogOverviewPage

export async function getStaticProps() {
  const sanityBlogPosts = await sanityClient.fetch(
    `*[_type == "blogPost"] | order(publishDate desc)`
  )

  return {
    props: {
      sanityBlogPosts,
    },
  }
}
