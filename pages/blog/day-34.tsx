import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { HeadDataProps } from "@/types/headData"
import BlogArticle from "@/components/blogArticle"

type Props = {}

function BlogPostPage({}: Props) {
  const headerImageUrl =
    "https://images.unsplash.com/photo-1557500608-1c483bc8d90d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  const headData: HeadDataProps = {
    pageTitle:
      "120 Days of Retail: Day 34 - Why Retailers Should Adopt Buy Online Pickup In-Store",
    pageDescription:
      "The option to buy online and pick up in-store is incredibly popular among shoppers and increasing 15% each year.",
    openGraphImageUrl: headerImageUrl,
  }
  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle="120 Days of Retail: Day 34 - Why Retailers Should Adopt Buy Online Pickup In-Store"
        blogSubtitle="The option to buy online and pick up in-store is incredibly popular among shoppers and increasing 15% each year."
        dateString="Sat Apr 8, 2023"
      >
        <>
          <p className="italic">
            This is part 34 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center mb-[30px]">
            <img src={headerImageUrl} alt="a man walking through Brooklyn" />
            <span className="text-sm">
              Photo credit{" "}
              <a
                href="https://unsplash.com/photos/NF1OsaFLMlc"
                className="underline"
                target="_none"
              >
                Avi Werde
              </a>{" "}
              via Unsplash
            </span>
          </div>
          <p>{`As the retail industry continues to evolve, small businesses must adapt to new trends and technologies to stay competitive. One of the latest trends in retail is the Buy Online Pick Up In-Store (BOPIS) option, which has seen tremendous growth in recent years. Offering BOPIS can help small retail stores stay relevant and meet the changing needs of their customers. In this article, we will discuss the benefits of BOPIS and why small retailers should consider implementing it in their stores.`}</p>
          <p className="font-bold">{`What is BOPIS?`}</p>
          <p>{`BOPIS is a shopping option that allows customers to buy products online and then pick them up in-store at a designated time. This method of shopping has become increasingly popular among customers who value convenience and speed.`}</p>
          <p className="font-bold">{`Benefits of BOPIS`}</p>
          <p>{`1. Increase Sales`}</p>
          <p>{`According to recent statistics, offering BOPIS can increase sales by up to 30%. Customers who use BOPIS are more likely to make additional purchases while in-store, leading to increased revenue for the business.`}</p>
          <p>{`2. Enhanced Customer Experience`}</p>
          <p>{`Offering BOPIS can also provide an enhanced customer experience. Customers can quickly and easily order online, saving them time and effort. When they arrive in-store to pick up their order, they can avoid long lines and wait times. This convenience can lead to increased customer loyalty and repeat business.`}</p>
          <p>{`3. Competitive Advantage`}</p>
          <p>{`By offering BOPIS, small retailers can compete with larger retailers who have already implemented this shopping option. BOPIS can help small retailers attract new customers who value convenience and speed, giving them a competitive advantage in the market.`}</p>
          <p className="font-bold">{`How to Implement BOPIS`}</p>
          <p>{`In previous years, the only way to offer pick up was to purchase an expensive monthly plan from an e-commerce business, and to integrate it with a website. This process all together could cost thousands of dollars and take weeks to properly implement. For stores who don't want to spend a lot of time and energy building custom websites and paying hundreds of dollars per month to an e-commerce giant, the best way is to use ListIt.`}</p>
          <p>{`ListIt is the buy-online-pickup-in-store (BOPIS) solution for
            independent retailers. It's free to make a page and begin selling.
            We'll never charge you a dime. When the product is ready later this month (April 2023), you'll be able to simply add your store to ListIt, write any details about your store including store hours, and begin adding products with our easy to use app by just snapping a picture and writing a description. In seconds you'll be uploading products to your ListIt page as easily as you post to Instagram. It's easy enough anyone can do it, even if English isn't your first language or you're not technical at all.`}</p>
          <p>{`Best of all, it costs nothing. ListIt adds a tiny commission on online purchases- which means we view retailers as a partner, not a customer: We only succeed if you succeed. Therefore no monthly fees, no hidden payment processing charges, it costs you nothing.`}</p>
          <p className="font-bold">{`Conclusion`}</p>
          <p>{`BOPIS is a shopping option that offers many benefits to small retailers. By implementing BOPIS, small retailers can increase sales, enhance the customer experience, and gain a competitive advantage in the market. With ListIt, retailers will be able to market and sell to customers to easily roll out BOPIS for free in seconds.`}</p>
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
