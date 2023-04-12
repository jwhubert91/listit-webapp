import Layout from "@/components/layout"
import React from "react"
import Link from "next/link"
import { HeadDataProps } from "@/types/headData"
import BlogArticle from "@/components/blogArticle"

type Props = {}

function BlogPostPage({}: Props) {
  const headerImageUrl =
    "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F60e8d18a-daf5-11e7-a039-c64b1c09b482?dpr=1&fit=scale-down&source=next&width=700"
  const headData: HeadDataProps = {
    pageTitle:
      "120 Days of Retail: Day 37 - Doing for Retail What Substack Did for Blogging",
    pageDescription:
      "When we remove technical barriers, we let ordinary people contribute more",
    openGraphImageUrl: headerImageUrl,
  }
  return (
    <Layout headData={headData}>
      <BlogArticle
        blogTitle={headData.pageTitle}
        blogSubtitle={headData.pageDescription}
        dateString="Tue Apr 11, 2023"
      >
        <>
          <p className="italic">
            This is part 37 of a 120 day series on validating our product
            ListIt, a digital storefront for independent retailers to sell their
            inventory online for free. You can see the whole series{" "}
            <Link href="/blog" className="underline">
              here
            </Link>
            .
          </p>
          <div className="blog__articleParagraph text-center mb-[30px]">
            <img
              src={headerImageUrl}
              alt="Industry City in Sunset Park, Brooklyn"
            />
            <span className="text-sm">
              Photo credit{" "}
              <a
                href="https://www.ft.com/content/88745a9c-d52f-11e7-ae3e-563c04c5339a"
                className="underline"
                target="_none"
              >
                Industry City
              </a>{" "}
              via Financial Times
            </span>
          </div>
          <p>{`I've written before about how Instagram helped ordinary people share their images online. But to recap, back in the 1990s when the internet was in its infancy, everyone had to create their own website to share photos. Every. Single. Person.`}</p>
          <p>{`It was so hard- that it was more likely you'd just email a picture to your friends or family or wait until they physically visited you. This severely limited the amount of actual digital photo sharing that went on.`}</p>
          <p>{`Then came Flickr, from Stewart Butterfield, the executive who later built Slack with a team of video game engineers. Anyway, with Flickr you could upload your high quality photography to your own page. It was cool. You could look people up and check out their work, but it was more a repo for uploading pictures than actually sharing them. There was very little social aspect to it.`}</p>
          <p>{`Picture sharing got a bit more streamlined with MySpace, where it was a component of a social media profile, and then Facebook. But it didn't really hit its stride until Instagram dropped the profile component almost completely and build a service around sharing pictures and a feed for viewing more pictures as they were uploaded by your friends. The revolution there was not having to look up a specific person to see their new work. Then of course there's the explore page, where new profiles were suggested for you, to further keep you hooked.`}</p>
          <p>{`With each of these innovations more and more pictures flooded the internet. On the one hand, a dedicated site for sharing pictures took the work out of the equation, so you no longer needed to build your own website to do this like you did in the 90's. On the other hand, as those services progressed from Flickr, to Myspace, to Facebook and then to Instagram you can see that the use case became more closely aligned around just sharing pictures, and allowing you to find more pictures like the ones you already enjoy. This ease of use allowed everyone to take part in sharing pictures, and so caused a proliferation of photos shared on the internet.`}</p>
          <p>{`Well a similar thing happened to Substack over the last 3 years. Before Substack, every blogger had to create their own blog. Sure, you could have used Google's Bloggr platform in the later 2000's and early 2010's. But it was really a pile of junk compared to Substack today, in terms of the user experience. Furthermore, Substack built tools around following and replicated the payment systems that allowed writers to be paid for their work if they wanted to. Let's just say nowadays if you are rolling your own blog platform (like I am now) then you're probably a marketer or someone who wants to actually bring people to their website, or a developer. For just writing blogs, Substack is all you need.`}</p>
          <p>{`One last example of a common use case for building websites is organizing weddings. Before The Knot, a couple would be relegated to sending physical wedding invitations and waiting for RSVPs. Now, they just sign up for the Knot and all the info about their wedding will be on a dedicated website that's made for them by The Knot, easy as pie. So the whole market for wedding websites- what there was before anyway- shifted to where it's so easy to make one with The Knot you'd be almost silly to spend hours doing it yourself, or paying thousands for a pro developer to do it for you. The ease of use of The Knot also allowed regular people to have a wedding website, where they likely wouldn't have before.`}</p>
          <p>{`ListIt follows a similar path of these services I've mentioned, by taking a previously ad-hoc use case that requires everyone make their own custom website if they want to have a web presence- specifically for the retail sector- and make one for themselves in seconds without technical know-how or prohibitive pricing.`}</p>
          <p>{`Hopefully this will allow any retailer to have a web presence, and will democratize being online, and if these other services serve as any example, this will allow a proliferation of retailers to get online.`}</p>
          <p>{`In this way ListIt is democratizing the internet and hopefully allowing retailers to spend less time worrying about their websites- or worrying about not having one- so that they can focus on the important task of running their store and making customers happy. That's the goal, anyway.`}</p>
          <p className="italic">
            {`ListIt is a free app that allows retailers to sell to local shoppers
            as easily as posting to Instagram. Like it? Dislike it? Simply have
            questions? Reach out to me directly at james@listit.one and be sure
            to check out our website for updates and the beta product sign-up-
            coming this April, 2023!`}
          </p>
        </>
      </BlogArticle>
    </Layout>
  )
}

export default BlogPostPage
