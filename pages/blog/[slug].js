import React from "react"
import { sanityClient } from "@/lib/sanity"

// components
import Layout from "@/components/layout"
import BlogArticle from "@/components/blogArticle"
import SanityBlogArticle from "@/components/sanityBlogArticle"

// helpers
import {
  publishDateString,
  getSanityImageUrl,
} from "@/utilities/helperFunctions"
import Image from "next/image"

function BlogPage({ blogPost }) {
  const sanityMainImageUrl = getSanityImageUrl(blogPost.mainImage.image).url()

  const headData = {
    pageTitle: blogPost.title,
    pageDescription: blogPost.subtitle,
    openGraphImageUrl: sanityMainImageUrl,
  }

  const publishDate = publishDateString(blogPost.publishDate)

  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle={headData.pageTitle}
        blogSubtitle={headData.pageDescription}
        dateString={publishDate}
      >
        <div className="w-full aspect-video relative mb-1">
          <Image
            src={sanityMainImageUrl}
            sizes={"100vw"}
            fill={true}
            className="absolute"
            unoptimized={true}
          />
        </div>
        <div className="italic text-center">
          <SanityBlogArticle content={blogPost.mainImage.subtitle} />
        </div>
        <SanityBlogArticle content={blogPost.body} />
      </BlogArticle>
    </Layout>
  )
}

export default BlogPage

export async function getStaticPaths() {
  // example of this function - https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
  const slugObjects = await sanityClient.fetch(
    `*[_type == "blogPost"] { slug }`
  )

  const paths = slugObjects.map((slugObject) => ({
    params: { slug: slugObject.slug.current },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const blogPost = await sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == "${slug}"][0]`
  )

  return {
    props: {
      blogPost,
    },
  }
}
