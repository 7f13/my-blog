import React from "react"
import { graphql, PageRendererProps } from "gatsby"
import { Query } from "@/gatsby-graphql"
import { Layout } from "@/components/Layout"
import { SEO } from "@/components/SEO"
import Img from "gatsby-image"
import { Profile } from "@/components/Profile"
interface Props extends PageRendererProps {
  data: Query
}
const BlogPostTemplate: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, tableOfContents, html } = markdownRemark!
  const featuredImgFluid =
    frontmatter!.featuredImage &&
    frontmatter!.featuredImage!.childImageSharp!.fluid
  return (
    <Layout>
      <SEO title={frontmatter!.title!} />
      <div className="blog-post-container">
        <Img
          fluid={featuredImgFluid}
          className="object-cover mb-6
        featured-img"
          fadeIn={false}
          draggable={false}
        />
        <div className="blog-post">
          <h1 className="text-center text-lg sm:text-xl font-bold mb-6">
            {frontmatter!.title!}
          </h1>
          <p className="text-sm text-center mb-2">
            投稿日: {frontmatter!.date}
          </p>
          <div
            className="table-of-content"
            dangerouslySetInnerHTML={{ __html: tableOfContents! }}
          />
          <div
            className="blog-post-content my-12 text-sm sm:text-base sm:px-6"
            dangerouslySetInnerHTML={{ __html: html! }}
          />
        </div>
      </div>
      <Profile />
    </Layout>
  )
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents(pathToSlugField: "frontmatter.slug")
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 864) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
