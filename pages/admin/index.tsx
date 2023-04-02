import React, { useState, useEffect } from "react"

// packages
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false
import "react-quill/dist/quill.snow.css"

// components
import Layout from "@/components/layout"
import { GoodButton } from "@/components/buttons"
import { BlogPostProps } from "@/types/blogPost"

type Props = {}

function AdminPage({}: Props) {
  const [quillValue, setQuillValue] = useState("")
  const [isWindowLoaded, setIsWindowLoaded] = useState(false)

  const [blogTitle, setBlogTitle] = useState("")
  const [blogSlug, setBlogSlug] = useState("")
  const [blogSubheader, setBlogSubheader] = useState("")

  const handleBlogSubmit = () => {
    const newPostDate = new Date()

    const blogDataObject: BlogPostProps = {
      title: blogTitle,
      createdDate: newPostDate,
      slug: blogSlug,
      subheader: blogSubheader,
      article: quillValue,
    }

    console.log(blogDataObject)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWindowLoaded(true)
    }
  }, [])

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  }

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ]

  return (
    <Layout>
      <h1 className="text__headerMassive mb-11">Admin Page</h1>
      <div className="border border-1 rounded-md p-5">
        <h3 className="font-bold text-xl mb-2">New Blog Post</h3>
        <div className="my-5">
          <label>Title</label>
          <input
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.currentTarget.value)}
            className="block w-full p-2 text-lg"
            required
          />
        </div>
        <div className="mb-5">
          <label>Slug</label>
          <input
            value={blogSlug}
            onChange={(e) => setBlogSlug(e.currentTarget.value)}
            className="block w-full p-2 text-lg"
            required
          />
        </div>
        <div className="mb-5">
          <label>Subheader</label>
          <input
            value={blogSubheader}
            onChange={(e) => setBlogSubheader(e.currentTarget.value)}
            className="block w-full p-2 text-lg"
            required
          />
        </div>
        <div className="mb-5">
          {isWindowLoaded ? (
            <ReactQuill
              theme="snow"
              value={quillValue}
              onChange={setQuillValue}
              modules={quillModules}
              formats={quillFormats}
            />
          ) : (
            "Loading"
          )}
        </div>
        <div className="text-center">
          <GoodButton title="Save Blog Post" onButtonPress={handleBlogSubmit} />
        </div>
      </div>
    </Layout>
  )
}

export default AdminPage
