import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
interface Props {
  className?: string
}
export const NewSupportImg: React.FC<Props> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "newsupport.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      alt="Rental InBody landing page"
      draggable={false}
      fadeIn={false}
      className={className}
    />
  )
}
