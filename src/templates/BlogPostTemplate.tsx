import React from "react"
import { graphql, PageRendererProps } from "gatsby"
import { Query } from "@/gatsby-graphql"
import { Layout } from "@/components/Layout"
import { SEO } from "@/components/SEO"
interface Props extends PageRendererProps {
  data: Query
}
const BlogPostTemplate: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark!
  return (
    <Layout>
      <SEO title={frontmatter!.title!} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="text-center text-xl font-bold my-6">
            {frontmatter!.title!}
          </h1>
          <p className="text-sm text-center mb-2">
            投稿日: {frontmatter!.date}
          </p>
          <div
            className="blog-post-content my-12"
            dangerouslySetInnerHTML={{ __html: html! }}
          />
        </div>
      </div>
    </Layout>
  )
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
