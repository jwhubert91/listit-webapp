import React from "react"
import { useRouter } from "next/router"
import { sanityClient } from "@/lib/sanity"

function BlogPage({ blogPost }) {
  const router = useRouter()
  const { slug } = router.query

  return <p>Slug: {slug}</p>
}

export default BlogPage

export async function getStaticPaths() {
  // example of this function - https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
  const sanityBlogPostSlugs = await sanityClient.fetch(
    `*[_type == "blogPost"] { slug }`
  )

  const paths = sanityBlogPostSlugs.map((blogPostSlug) => ({
    params: { slug: blogPostSlug.current },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const blogPost = await sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == "${params.slug}"][0]`
  )

  return {
    props: {
      blogPost,
    },
  }
}
