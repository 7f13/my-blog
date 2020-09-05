import React from "react"
import { Link } from "gatsby"
import { MarkdownRemarkFrontmatter } from "@/gatsby-graphql"
interface Props {
  post: MarkdownRemarkFrontmatter
}
export const BlogPostCard: React.FC<Props> = ({ post }) => {
  return (
    <Link to={post.slug!} className="">
      <div className="p-4 rounded border-solid border-gray-200 border mb-2 max-w-3xl mx-aut hover:text-teal-400 hover:border-teal-200">
        <h2 className="text-lg sm:text-2xl">{post.title}</h2>
        <p className="text-xs">{post.date}</p>
      </div>
    </Link>
  )
}
