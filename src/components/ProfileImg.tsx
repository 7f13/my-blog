import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
interface Props {
  className?: string
}
export const ProfileImg: React.FC<Props> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
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
      alt="profile picture"
      draggable={false}
      fadeIn={false}
      loading="eager"
      className={className}
    />
  )
}
