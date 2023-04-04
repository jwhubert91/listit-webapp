import React, { ReactElement } from "react"
import { useRouter } from "next/router"
import { IoIosArrowRoundBack } from "react-icons/io"

type Props = {
  blogTitle: string
  blogSubtitle: string
  dateString: string
  children: ReactElement
}

function blogArticle({ blogTitle, blogSubtitle, dateString, children }: Props) {
  const router = useRouter()

  return (
    <div className="blog__container">
      <div className="mb-5">
        <button onClick={() => router.back()} className="flex items-center">
          <IoIosArrowRoundBack className="text-3xl text-black" />
          <span className="text-xl font-medium underline">ListIt Blog</span>
        </button>
      </div>
      <h1 className="font-bold text-gray-800 text-3xl leading-tight mb-1">
        {blogTitle}
      </h1>
      <h2 className="text-gray-500 text-xl mb-5">{blogSubtitle}</h2>
      <span className="text-sm text-gray-500 mb-6 block">{dateString}</span>
      <div className="text-lg font-serif text-gray-700 leading-relaxed">
        {children}
      </div>
      <hr className="border-gray-300" />
    </div>
  )
}

export default blogArticle
