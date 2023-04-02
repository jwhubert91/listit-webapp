import Layout from "@/components/layout"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import BlogCard from "@/components/blogCard"

type Props = {}

function BlogOverviewPage({}: Props) {
  return (
    <Layout>
      <div>
        <h1 className="text__headerMassive mt-2 mb-5 text-center">
          ListIt Blog 🛍
        </h1>
        <div className="grid grid-cols-1 gap-y-5 gap-x-5 mx-5 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            slug="/blog/day-27"
            imageUrl="https://images.unsplash.com/photo-1674510583160-09ea41059be7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            date="Sat Apr 1, 2023"
            title="120 Days of Retail: Day 27 - Starting a Shopping Site for Bay
            Ridge, Brooklyn"
            subtitle="Or, how I stopped being a hater and learned to love South
            Brooklyn"
          />
        </div>
      </div>
    </Layout>
  )
}

export default BlogOverviewPage