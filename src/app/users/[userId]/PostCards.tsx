"use client"

import post from "@/type/post"
import Link from "next/link"

export default function PostCards({ post }: {post: post}) {
  return (
    <Link href = {`/users`} className = "bg-rose-400 w-40 md:w-120 m-4 p-8 rounded-4xl flex flex-col gap-3">
      <p> ID: {post.id} </p>
      <p> UserId: {post.userId} </p>
      <p> Title: {post.title} </p>
      <p> Body: {post.body} </p>
    </Link>
  )
}