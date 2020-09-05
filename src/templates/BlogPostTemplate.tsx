import React from "react"
import { graphql, PageRendererProps } from "gatsby"
import { useWindowSize } from "react-use"
import { Query } from "@/gatsby-graphql"
import { BlogPageLayout } from "@/components/BlogPageLayout"
import { Layout } from "@/components/Layout"
import { SEO } from "@/components/SEO"
import Img from "gatsby-image"
import { Profile } from "@/components/Profile"
interface Props extends PageRendererProps {
  data: Query
}
const BlogPostTemplate: React.FC<Props> = ({ data }) => {
  const { width } = useWindowSize()
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, tableOfContents, html } = markdownRemark!
  const featuredImgFluid =
    frontmatter!.featuredImage &&
    frontmatter!.featuredImage!.childImageSharp!.fluid
  return (
    <BlogPageLayout>
      <SEO title={frontmatter!.title!} />
      {console.log(frontmatter)}
      <div className="blog-post-page">
        <div className="blog-post-container ">
          <Img
            fluid={featuredImgFluid}
            className="object-cover mb-6
        featured-img "
            fadeIn={false}
            draggable={false}
          />
          <div className="blog-post max-w-4xl sm:px-6">
            <h1 className="text-center text-lg sm:text-xl font-bold mb-6">
              {frontmatter!.title!}
            </h1>
            <p className="text-sm text-center mb-2">
              投稿日: {frontmatter!.date}
            </p>
            <div>
              <div
                className="blog-post-content my-12 text-sm sm:text-base `"
                dangerouslySetInnerHTML={{ __html: html! }}
              />
              {/* {width > 1280 && (
                <div
                  className="table-of-content h-64 p-4 ml-2 w-56 sticky top-0 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: tableOfContents! }}
                />
              )} */}
            </div>
          </div>
        </div>
        <Profile />
      </div>
    </BlogPageLayout>
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
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1128) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
