import Layout from "@/components/layout"
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
        <h1 className="text__headerMassive mt-2 mb-11 text-center">
          ListIt Blog 🛍
        </h1>
        <div className="flex flex-col gap-y-5 blog__width">
          <BlogCard
            slug="/blog/day-37"
            imageUrl="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F60e8d18a-daf5-11e7-a039-c64b1c09b482?dpr=1&fit=scale-down&source=next&width=700"
            date="Tue Apr 11, 2023"
            title="120 Days of Retail: Day 37 - Doing for Retail What Substack Did for Blogging"
            subtitle="When we remove technical barriers, we let ordinary people contribute more"
          />
          <BlogCard
            slug="/blog/day-36"
            imageUrl="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            date="Mon Apr 10, 2023"
            title="120 Days of Retail: Day 36 - An all-new slogan for ListIt, and new verbiage for the site"
            subtitle="Refreshing how we explain the service to retailers to include the value-add to them"
          />
          <BlogCard
            slug="/blog/day-35"
            imageUrl="https://images.unsplash.com/photo-1557500608-1c483bc8d90d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            date="Sun Apr 9, 2023"
            title="120 Days of Retail: Day 35"
            subtitle=""
          />
          <BlogCard
            slug="/blog/day-34"
            imageUrl="https://images.unsplash.com/photo-1557500608-1c483bc8d90d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            date="Sat Apr 8, 2023"
            title="120 Days of Retail: Day 34 - Why Retailers Should Adopt Buy Online Pickup In-Store"
            subtitle="The option to buy online and pick up in-store is incredibly popular among shoppers and increasing 15% each year."
          />
          <BlogCard
            slug="/blog/day-33"
            imageUrl="https://th-thumbnailer.cdn-si-edu.com/PiL_TdI71UP7a7w818Lp-7DB4YE=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b7/1e/b71e206b-df4a-4d9e-958a-1a249c544c6e/the_horse_in_motion_2_resized.jpg"
            date="Fri Apr 7, 2023"
            title="120 Days of Retail: Day 33 - How Not to Invent a Horse"
            subtitle="A discussion of user testing on the cusp of a totally new retail concept"
          />
          <BlogCard
            slug="/blog/day-32"
            imageUrl="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            date="Thu Apr 6, 2023"
            title="120 Days of Retail: Day 32 - BOPIS! Why Buy-Online Pick Up In-Store is Becoming Essential"
            subtitle="Everything points to BOPIS, or curbside pickup, becoming the next important piece of omnichannel sales"
          />
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
