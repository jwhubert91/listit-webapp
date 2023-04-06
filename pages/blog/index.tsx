import Layout from "@/components/layout"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import BlogCard from "@/components/blogCard"
import { HeadDataProps } from "@/types/headData"

type Props = {}

function BlogOverviewPage({}: Props) {
  const headData: HeadDataProps = {
    pageTitle: "Blog",
    pageDescription: "Blog Posts for Listit.one",
  }
  return (
    <Layout headData={headData}>
      <div>
        <h1 className="text__headerMassive mt-2 mb-5 text-center">
          ListIt Blog 🛍
        </h1>
        <div className="grid grid-cols-1 gap-y-5 gap-x-5 mx-5 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            slug="/blog/day-31"
            imageUrl="https://images.unsplash.com/photo-1614898983622-f20044c60b30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            date="Wed Apr 5, 2023"
            title="120 Days of Retail: Day 31 - How to Actually Help Retailers in South Brooklyn"
            subtitle="A discussion of options for South Brooklyn retailers looking to improve their online presence"
          />
          <BlogCard
            slug="/blog/day-30"
            imageUrl="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            date="Tue Apr 4, 2023"
            title="120 Days of Retail: Day 30 - Installed Google Analytics"
            subtitle="Just checking in"
          />
          <BlogCard
            slug="/blog/day-29"
            imageUrl="https://images.unsplash.com/photo-1586892478025-2b5472316f22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            date="Mon Apr 3, 2023"
            title="120 Days of Retail: Day 29 - Making the Landing Page Appealing to
            South Brooklyn Retailers"
            subtitle="A quick check-in on the ListIt website homepage"
          />
          <BlogCard
            slug="/blog/day-28"
            imageUrl="https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            date="Sun Apr 2, 2023"
            title="120 Days of Retail: Day 28 - A 90 day launch plan for ListIt"
            subtitle="Mapping the plan for a public launch of ListIt for shopping in Bay
            Ridge, Brooklyn"
          />
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
