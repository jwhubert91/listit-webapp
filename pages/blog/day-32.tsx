import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { HeadDataProps } from "@/types/headData"
import BlogArticle from "@/components/blogArticle"

type Props = {}

function BlogPostPage({}: Props) {
  const headData: HeadDataProps = {
    pageTitle:
      "120 Days of Retail: Day 32 - BOPIS! Why Buy-Online Pick Up In-Store is Becoming Essential",
    pageDescription:
      "Everything points to BOPIS, or curbside pickup, becoming the next important piece of omnichannel sales",
    openGraphImageUrl:
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  }
  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle="120 Days of Retail: Day 32 - BOPIS! Why Buy-Online Pick Up In-Store is Becoming Essential"
        blogSubtitle="Everything points to BOPIS, or curbside pickup, becoming the next important piece of omnichannel sales"
        dateString="Thu Apr 6, 2023"
      >
        <>
          <p className="italic">
            This is part 32 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center mb-[30px]">
            <img
              src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              alt="A shopper using in-store pickup"
            />
            <span className="text-sm">
              . Credit{" "}
              <a
                href="https://unsplash.com/photos/jo8C9bt3uo8"
                className="underline"
                target="_none"
              >
                Jacek Dylag
              </a>{" "}
              via Unsplash
            </span>
          </div>
          <p>{`In today's digital age, having an online presence has become a necessity for businesses, especially for independent retailers. With the rise of e-commerce and the convenience it offers, it's essential for independent retailers to have a website and an online store. One of the most effective strategies for independent retailers is to offer BOPIS (Buy Online, Pick Up In-Store) to their customers. BOPIS has proven to be a game-changer for independent retailers, providing a seamless shopping experience that benefits both the customer and the retailer. In this article, we'll discuss the reasons why an independent retailer should have an online web presence with BOPIS.`}</p>
          <p>{`Firstly, having an online web presence with BOPIS allows independent retailers to reach a wider audience. According to a study conducted by Statista, the number of digital buyers worldwide is expected to reach 2.5 billion in the coming decade. With so many people shopping online, it's crucial for independent retailers to tap into this market. By having an online presence, independent retailers can expand their reach beyond their local area and attract customers from all over the world. BOPIS also provides an opportunity for independent retailers to offer a more personalized shopping experience for their customers, which is crucial in building a loyal customer base.`}</p>
          <p>{`Secondly, offering BOPIS can significantly increase sales for independent retailers. According to a survey conducted by Adobe, retailers with BOPIS capabilities experienced a 119% increase in year-over-year online sales. BOPIS provides customers with the convenience of shopping online, but also allows them to avoid shipping costs and delays by picking up their purchases in-store. This convenience has proven to be a major selling point for customers, leading to increased sales for independent retailers.`}</p>
          <p>{`Thirdly, having an online web presence with BOPIS can help independent retailers compete with larger retailers. With the rise of e-commerce, larger retailers have been able to dominate the market due to their resources and capabilities. However, by offering BOPIS, independent retailers can provide a similar level of convenience to their customers, which helps level the playing field. BOPIS also allows independent retailers to offer a more personalized shopping experience, something that larger retailers often struggle with.`}</p>
          <p>{`Having an online web presence with BOPIS is crucial for independent retailers in today's digital age. It allows them to reach a wider audience, increase sales, and compete with larger retailers. Independent retailers should take advantage of the opportunities that BOPIS provides and embrace the digital revolution to stay relevant and competitive in the marketplace.`}</p>
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
