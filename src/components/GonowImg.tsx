import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
interface Props {
  className?: string
}
export const GonowImg: React.FC<Props> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gonow.png" }) {
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
      alt="gonow landing page"
      draggable={false}
      fadeIn={false}
      className={className}
    />
  )
}
