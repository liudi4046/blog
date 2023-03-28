import getSortedPostData, { getPostData } from "@/lib/posts"
import React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function page({
  params,
}: {
  params: {
    postId: string
  }
}) {
  const postsData = getSortedPostData()
  const post = postsData.find((post) => post.id === params.postId)
  // if (!post) {
  //   notFound()
  // }
  const blog = await getPostData(params.postId)
  return (
    <div className="max-w-2xl mx-auto mt-8 min-h-[85vh] flex flex-col">
      <div className="font-bold text-lg text-center">{blog.title}</div>
      <div className="text-xs mt-3 text-center">{blog.date}</div>

      <div
        className="mt-8 prose mx-auto my-5"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <p className="text-base mt-auto font-bold hover:text-slate-500">
        <Link href="/">&larr;Back to Home</Link>
      </p>
    </div>
  )
}
