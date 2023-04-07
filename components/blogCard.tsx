import React from "react"
import Link from "next/link"

interface BlogCardProps {
  slug: string
  imageUrl: string
  date: string
  title: string
  subtitle: string
}

function blogCard({
  slug = "",
  imageUrl = "",
  date = "",
  title = "",
  subtitle = "",
}: BlogCardProps) {
  return (
    <Link href={slug}>
      <div className="border border-5 border-black gap-x-5 px-3 py-2 rounded-md flex items-start text-left">
        <div className="mb-2 aspect-[3/2] max-w-[200px]">
          <img src={imageUrl} alt={title} className="cover" />
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
