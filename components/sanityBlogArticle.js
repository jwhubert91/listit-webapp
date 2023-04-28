import React from "react"

// packages
import { PortableText } from "@portabletext/react"
import Image from "next/image"

// helpers
import { getSanityImageUrl } from "../utilities/helperFunctions"

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
        const { image, subtitle } = value
        const pictureUrl = getSanityImageUrl(image).url()
        return (
          <div
            className={`blog__articleParagraph text-center mb-[30px] ${bodyContentClassName}`}
          >
            <div className="relative aspect-video">
              <Image
                src={pictureUrl}
                // alt={subtitle}
                alt="test alt"
                className="absolute !contain"
                fill
                sizes="730px"
                priority={false}
                unoptimized={true}
              />
            </div>
            {/* {subtitle && <span className="text-sm">{subtitle}</span>} */}
          </div>
        )
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
            <p className={`mb-c text-base ${bodyContentClassName}`}>
              {children}
            </p>
          )
        },
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
              className={`${linkClassName}`}
            >
              {children}
            </a>
          )
        },
      },
    },
  }
  return <PortableText value={content} components={components} />
}

export default PortableTextArticle
