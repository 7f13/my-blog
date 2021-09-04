import React from "react"
import { graphql, PageRendererProps } from "gatsby"
import { Query } from "@/types/gatsby-graphql"
import { BlogPageLayout } from "@/components/BlogPageLayout"
import { SEO } from "@/components/SEO"
import Img, { FluidObject } from "gatsby-image"
import { Profile } from "@/components/Profile"
import { Link } from "gatsby"
interface Props extends PageRendererProps {
  data: Query
}
const BlogPostTemplate: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { excerpt, frontmatter, html } = markdownRemark!
  const featuredImgFluid = frontmatter?.featuredImage?.childImageSharp
    ?.fluid as FluidObject
  return (
    <BlogPageLayout>
      <SEO title={`${frontmatter!.title!} - Lepus`} description={excerpt!} />
      <div className="blog-post-page">
        <div className="blog-post-container ">
          <Img
            fluid={featuredImgFluid}
            className="object-cover mb-6
        featured-img "
            fadeIn={false}
            draggable={false}
            loading="eager"
          />
          <div className="blog-post max-w-4xl sm:px-6">
            {/* カテゴリ */}
            {frontmatter?.category && (
              <Link to={`/category/${frontmatter.category}`}>
                <p className="underline text-center hover:text-teal-400 mb-4">
                  {frontmatter.category}
                </p>
              </Link>
            )}
            <h1 className="text-center text-lg sm:text-xl mb-6">
              {frontmatter!.title!}
            </h1>
            <p className="text-sm text-center mb-2">
              投稿日: {frontmatter!.date}
            </p>

            <div
              className="blog-post-content my-12 text-sm sm:text-base leading-loose"
              dangerouslySetInnerHTML={{ __html: html! }}
            />
            {/* 目次 */}
            {/* {width > 1280 && (
                <div
                  className="table-of-content h-64 p-4 ml-2 w-56 sticky top-0 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: tableOfContents! }}
                />
              )} */}
            <Profile />
          </div>
        </div>
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
      excerpt
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
