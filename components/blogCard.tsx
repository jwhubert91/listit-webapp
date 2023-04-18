import React from "react"
import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  slug: string
  imageUrl: string
  date: string
  title: string
  subtitle: string
  isLocalImage?: boolean
}

function blogCard({
  slug = "",
  imageUrl = "",
  date = "",
  title = "",
  subtitle = "",
  isLocalImage = true,
}: BlogCardProps) {
  return (
    <Link href={slug}>
      <div className="border border-5 border-black gap-x-5 px-3 py-2 rounded-md flex text-left">
        <div className="mb-2 aspect-[3/2] h-[100px] relative">
          {isLocalImage ? (
            <img src={imageUrl} alt={title} className="cover" />
          ) : (
            <Image
              src={imageUrl}
              alt={title}
              className="absolute cover"
              fill={true}
              // discussion of image issue and why add unoptimized prop: https://github.com/vercel/next.js/issues/23523
              unoptimized={true}
            />
          )}
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">{title}</h3>
          <p>{subtitle}</p>
          <span className="text-sm">{date}</span>
        </div>
      </div>
    </Link>
  )
}

export default blogCard
