import Layout from "@/components/layout"
import React, { ReactElement } from "react"
import { HeadDataProps } from "@/types/headData"
import BlogArticleContainer from "@/components/blogArticle"

export interface BlogHeaderImageProps {
  imageUrl: string
  altText: string
  photoCreditName: string
  photoCreditUrl: string
  photoPublication?: string
}

export interface BlogPostPageProps {
  children: ReactElement
  headerImageData: BlogHeaderImageProps
  headData: HeadDataProps
  title: string
  subtitle: string
  dateString: string
  postDescription: ReactElement
}

function BlogHeaderImage({
  imageUrl = "",
  altText = "",
  photoCreditName = "",
  photoCreditUrl = "",
  photoPublication = "",
}: BlogHeaderImageProps) {
  return (
    <div className="blog__articleParagraph text-center mb-[30px]">
      <img src={imageUrl} alt={altText} />
      <span className="text-sm">
        Photo credit{" "}
        <a href={photoCreditUrl} className="underline" target="_none">
          {photoCreditName}
        </a>{" "}
        {photoPublication && `via ${photoPublication}`}
      </span>
    </div>
  )
}

function BlogPostPage({
  children,
  headerImageData,
  headData,
  title = "",
  subtitle = "",
  dateString = "",
  postDescription,
}: BlogPostPageProps) {
  return (
    <Layout headData={headData}>
      <BlogArticleContainer
        blogTitle={title}
        blogSubtitle={subtitle}
        dateString={dateString}
      >
        <>
          <p className="italic">{postDescription}</p>
          <BlogHeaderImage {...headerImageData} />
          {children}
          <p className="italic">
            {`ListIt is a free app that allows retailers to sell to local shoppers
            as easily as posting to Instagram. Like it? Dislike it? Simply have
            questions? Reach out to me directly at james@listit.one and be sure
            to check out our website for updates and the beta product sign-up-
            coming this week!`}
          </p>
        </>
      </BlogArticleContainer>
    </Layout>
  )
}

export default BlogPostPage
