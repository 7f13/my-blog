import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
interface Props {
  className?: string
}
export const NyanCalImg: React.FC<Props> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "nyancal.png" }) {
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
      alt="NyanCal app"
      draggable={false}
      fadeIn={false}
      className={className}
    />
  )
}
