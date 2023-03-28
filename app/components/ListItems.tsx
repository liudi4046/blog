import getFormattedDate from "@/lib/getFormattedDate"
import Link from "next/link"
import React from "react"

type Props = {
  post: BlogPost
}

export default function ListItems({ post }: Props) {
  const { date, title, id } = post
  const formattedDate = getFormattedDate(date)
  return (
    <li className="mb-5">
      <Link href={`/posts/${id}`} className="text-xl font-bold underline">
        {title}
      </Link>
      <p>{formattedDate}</p>
    </li>
  )
}
