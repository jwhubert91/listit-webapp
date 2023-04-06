import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { HeadDataProps } from "@/types/headData"
import BlogArticle from "@/components/blogArticle"

type Props = {}

function BlogPostPage({}: Props) {
  const headData: HeadDataProps = {
    pageTitle:
      "120 Days of Retail: Day 31 - How to Actually Help Retailers in South Brooklyn",
    pageDescription:
      "A discussion of options for South Brooklyn retailers looking to improve their online presence",
    openGraphImageUrl:
      "https://images.unsplash.com/photo-1614898983622-f20044c60b30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  }
  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle="120 Days of Retail: Day 31 - How to Actually Help Retailers in South Brooklyn"
        blogSubtitle="A discussion of options for South Brooklyn retailers looking to improve their online presence"
        dateString="Wed Apr 5, 2023"
      >
        <>
          <p className="italic">
            This is part 31 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center mb-[30px]">
            <img
              src="https://images.unsplash.com/photo-1614898983622-f20044c60b30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              alt=""
            />
            <span className="text-sm">
              . Credit{" "}
              <a
                href="https://unsplash.com/photos/LsPK8yJxNKY"
                className="underline"
                target="_none"
              >
                Robinson Grieg
              </a>{" "}
              via Unsplash
            </span>
          </div>
          <p>{`Gone are the glorious days of Century 21, the massive department store everyone swears really held the neighborhood together at 86th street down in Bay Ridge. That said, there are hundreds of small retailers on 3rd, 4th, and 5th streets with an incredible selection of goods.`}</p>
          <p>{`I was surprised when I moved here at how charming it all was. It reminded me a bit of West Seattle, the neighborhood I grew up in on the west coast. It's very diverse, ethnically, religiously, and economically. But overall it's just a safe, friendly neighborhood for families and caters to those kinds of shops. A few favorites I've found are The Little Cupcake Bake Shop on 3rd, Boca del Cielo, Pizza Wagon, and of course the local standby Paneantico. In terms of retailers, I have an incredible garden store right down the street, a hardware store, and there's a lovely bookstore I've been meaning to check out just a few blocks away. Not to mention all of the nicer clothing shops on 3rd I always walk by.`}</p>
          <p>{`All of these shops deserve to stay in business. And the best thing we can do to keep small neighborhood ecosystems going like this is to provide small stores with the tools to stay in business despite online disruption from huge retailers like Walmart and Amazon.`}</p>
          <p>{`For a small store though, the existing tools that are out there to get online and begin selling are prohibitively expensive and time consuming. As we've covered in other posts, the average cost of a website is around $5000 give or take, and takes anywhere from 3 weeks to 6 months to get off the ground. Then adding ecommerce capability on top of that is going to involve usually an expensive subscription package. Most stores just need a page that shoppers can find where they can post updates and their inventory, and have it be free, which is why Instagram and social media are such popular standbys for independent retailers- they're free and easy to use.`}</p>
          <p>{`These are the very kinds of retailers we aim to help with ListIt and to keep in store against the online giants. We're developing a tool to put in the hands of every retailer no matter their technical skill level, budget or even proficiency in English. We're excited to be in the arena.`}</p>
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
