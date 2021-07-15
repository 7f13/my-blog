import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
interface Props {
  className?: string
}
export const WinWinImg: React.FC<Props> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "winwin.png" }) {
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
      alt="winwin app store"
      draggable={false}
      fadeIn={false}
      loading="eager"
      className={className}
    />
  )
}
