import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"

type Props = {}

function BlogPostPage({}: Props) {
  return (
    <Layout>
      <div className="blog__container">
        <h1 className="font-bold text-gray-800 text-3xl leading-tight mb-1">
          120 Days of Retail: Day 27 - Starting a Shopping Site for Bay Ridge,
          Brooklyn
        </h1>
        <h2 className="text-gray-500 text-xl mb-5">
          Or, how I stopped being a hater and learned to love South Brooklyn
        </h2>
        <span className="text-sm text-gray-500 mb-6 block">
          Sat Apr 1, 2023
        </span>
        <div className="text-lg font-serif text-gray-700 leading-relaxed">
          <p className="italic">
            This is part 27 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center">
            <img
              src="https://images.unsplash.com/photo-1674510583160-09ea41059be7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="bay ridge, brooklyn"
            />
            <span className="text-sm">
              A snapshot of the Verrazano Bridge in Bay Ridge, Brooklyn. Credit{" "}
              <a
                href="https://unsplash.com/photos/eqJkKMuxBHc"
                className="underline"
                target="_none"
              >
                matthew st. amand
              </a>{" "}
              via Unsplash
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostPage
