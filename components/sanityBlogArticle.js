import React from "react"

// packages
import { PortableText } from "@portabletext/react"
import Image from "next/image"

// components
import VideoPlayer from "./videoPlayer"
import LoopVideo from "./loopVideo"
import HorizontalRule from "./horizontalRule"

// helpers
import {
  getSanityImageUrl,
  getSanityFileUrl,
} from "../utilities/helperFunctions"

const PortableTextArticle = ({
  content,
  bodyContentClassName = "article__container",
  headerContentClassName = "article__container",
  header3ContentClassName = "article__container",
  linkClassName = "",
}) => {
  const components = {
    types: {
      articleImage: ({ value }) => {
        const { name, picture, caption } = value
        const pictureUrl = getSanityImageUrl(picture).url()
        return (
          <div className={`my-f ${bodyContentClassName}`}>
            <div className="relative aspect-3/2">
              <Image
                src={pictureUrl}
                alt={name}
                className="absolute"
                fill
                sizes="590px"
                priority={false}
              />
            </div>
            {caption && <span className="f-b2__caption">{caption}</span>}
          </div>
        )
      },
      wideImage: ({ value }) => {
        const { name, picture, caption } = value
        const pictureUrl = getSanityImageUrl(picture).url()
        return (
          <div className="w-full my-f">
            <div className="relative aspect-3/2">
              <Image
                src={pictureUrl}
                alt={name}
                className="absolute"
                fill
                sizes="590px"
                priority={false}
              />
            </div>
            {caption && <span className="f-b2__caption">{caption}</span>}
          </div>
        )
      },
      imageGrid: ({ value }) => {
        const { leftColumnImage, rightColumnImage } = value
        const imageArray = [leftColumnImage, rightColumnImage]
        return (
          <div
            className={`${bodyContentClassName} mb-f grid grid-cols-1 grid-rows-2 gap-y-e md:grid-cols-2 md:grid-rows-1 md:gap-x-e`}
          >
            {imageArray.map((imageGridItem) => {
              const { name, caption, picture } = imageGridItem
              const pictureUrl = getSanityImageUrl(picture).url()
              return (
                <div key={name}>
                  <div className="w-full relative aspect-3/2">
                    <Image
                      src={pictureUrl}
                      alt={name}
                      className="absolute"
                      fill
                      sizes="639px"
                      priority={false}
                    />
                  </div>
                  {caption && <span className="f-b2__caption">{caption}</span>}
                </div>
              )
            })}
          </div>
        )
      },
      videoUrl: ({ value }) => {
        const { url, videoTitle, coverImage, caption } = value
        const coverImageUrl = getSanityImageUrl(coverImage).url()
        return (
          <div className={`${bodyContentClassName} mb-f`}>
            <VideoPlayer
              videoUrl={url}
              videoTitle={videoTitle}
              coverImageUrl={coverImageUrl}
            />
            {caption && <span className="f-b2__caption">{caption}</span>}
          </div>
        )
      },
      loopVideo: ({ value }) => {
        const { file, videoTitle, caption } = value
        const videoUrl = getSanityFileUrl(file)
        return (
          <LoopVideo
            videoUrl={videoUrl}
            className={`${bodyContentClassName} mb-f`}
            videoTitle={videoTitle}
            caption={caption}
          />
        )
      },
      pullQuote: ({ value }) => {
        const { text, color } = value
        const horizontalRuleClassName = `h-b mb-c bg-${color}`
        const headerClassName = `text-md leading-[28px] font-bold text-${color}`
        return (
          <div className={`${bodyContentClassName} lg:relative`}>
            <div className="block my-f lg:absolute lg:w-[279px] lg:left-[-307px]">
              <HorizontalRule className={horizontalRuleClassName} />
              <span className={headerClassName}>{`"${text}"`}</span>
            </div>
          </div>
        )
      },
    },
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => (
        <h1 className={`text-2xl ${headerContentClassName}`}>{children}</h1>
      ),
      H2: ({ children }) => (
        <h2
          className={`text-md leading-[28px] md:text-xl md:leading-[46px] font-medium ${headerContentClassName}`}
        >
          {children}
        </h2>
      ),
      H3: ({ children }) => (
        <p className={`mb-f text-base font-bold ${header3ContentClassName}`}>
          {children}
        </p>
      ),
      normal: ({ children }) => {
        return (
          <p className={`mb-c text-base ${bodyContentClassName}`}>{children}</p>
        )
      },
      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2
          className={`text-lg text-primary text-purple-700 ${bodyContentClassName}`}
        >
          {children}
        </h2>
      ),
    },
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined
        return (
          <a
            href={value?.href}
            target={target}
            // rel={target === "_blank" && "noindex nofollow"}
            className={`f-b1__link_thick ${linkClassName}`}
          >
            {children}
          </a>
        )
      },
    },
  }
  return <PortableText value={content} components={components} />
}

export default PortableTextArticle
