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
      <div className="border border-5 border-black p-2 rounded-md">
        <div className="mb-2">
          <img src={imageUrl} />
        </div>
        <span className="mb-2 text-sm">{date}</span>
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </Link>
  )
}

export default blogCard
