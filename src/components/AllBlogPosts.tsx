import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MarkdownRemark } from "@/gatsby-graphql"
import { BlogPostCard } from "@/components/BlogPostCard"
const LoadButton = () => {
  return (
    <button className="text-white rounded shadow-lg bg-black py-2 px-6 sm:py-4 sm:px-12 block mx-auto my-16 text-sm hover:bg-teal-300 focus:bg-teal-400 focus:outline-none">
      More
    </button>
  )
}
export const AllBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
  return (
    <>
      <div>
        {posts.map(({ node }: { node: MarkdownRemark }) => (
          <BlogPostCard key={node.frontmatter!.slug} post={node.frontmatter!} />
        ))}
      </div>
      <LoadButton />
    </>
  )
}
