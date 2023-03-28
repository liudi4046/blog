import React from "react"
import getSortedPostData from "@/lib/posts"
import ListItems from "./ListItems"
export default function Posts() {
  const posts = getSortedPostData()
  return (
    <div className="max-w-xl mx-auto mt-5 flex flex-col gap-3">
      <p className="text-3xl font-bold mt-10">Latest Blogs</p>
      <ul className="">
        {posts.map((post) => {
          return <ListItems key={post.id} post={post} />
        })}
      </ul>
    </div>
  )
}
