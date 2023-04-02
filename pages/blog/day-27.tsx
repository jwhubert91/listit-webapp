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
          <div className="blog__articleParagraph text-center mb-[30px]">
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
          <p>
            I know I'm supposed to sit down and write something profound every
            time I create a blog post. But today I expended all of my energy
            coding a new blog feature on the ListIt website which is what you're
            reading this from now. My intention with the blog for ListIt was to
            have some similar styling as Substack so any consistent readers
            (which I doubt there are any really) can comfortably follow along.
          </p>
          <p>
            Anyway I know I said I'd be debuting the UI prototypes for ListIt
            today but I simply haven't the energy. So instead I'm going to talk
            about my strategy for launching ListIt hyperlocal to my adopted
            neighborhood of Bay Ridge, Brooklyn.
          </p>
          <p>
            I may just be getting old, but I've been thinking a lot since moving
            here how idyllic of a neighborhood this is and how much I enjoy it
            over supposedly hipper other parts of North Brooklyn where I used to
            live. And from the perspective of starting a company catering to
            independent local retailers it's hard to imagine many better places
            in the country to do so. Let me explain.
          </p>
          <p>
            Bay Ridge is a small neighborhood at the southern terminus of
            Brooklyn. In other words, the last stop before you cross the
            Verrazanno Bridge to Staten Island. It's about 30 blocks North-South
            and 10 blocks East-West. Unlike other parts of New York, Bay Ridge
            is a neighboorhood that's a bit more representative of America.
          </p>
          <p>
            Close to half of all households have children. There are schools,
            parks, shopping. It's an extremely diverse place with plenty of
            immigrants, but middle class and old money too. According to the Bay
            Ridge Business Improvement District,{" "}
            <a
              href="https://www.bayridgebid.com/directory#:~:text=in%20Bay%20Ridge.,over%20300%20locally%20owned%20businesses."
              className="underline"
            >
              there are over 300 local independent businesses in the
              neighborhood
            </a>
            . There are about 90,000 people living in this little neighborhood
            which makes it a bit bigger than the East Village and a bit smaller
            than Bushwick.
          </p>
          <p>
            It's good to start a business or app or website in a place that's
            representative of America because it means the dynamics and
            challenges you'll face are more similar to those the rest of the
            country faces. I'm not sure how many startups started and died
            in-utero in San Francisco because that's such a unique ecosystem,
            but it's less likely in a place like this.
          </p>
          <p>
            Anywho, I hope to have some UI designs to share with you tomorrow.
            Until then, thanks for reading!
          </p>
          <p className="italic">
            ListIt is a free app that allows retailers to sell to local shoppers
            as easily as posting to Instagram. Like it? Dislike it? Simply have
            questions? Reach out to me directly at james@listit.one and be sure
            to check out our website for updates and the beta product sign-up-
            coming this weekend!
          </p>
        </div>
        <hr className="border-gray-300" />
      </div>
    </Layout>
  )
}

export default BlogPostPage
