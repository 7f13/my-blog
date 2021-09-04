import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
interface Props {
  className?: string
}
export const WinWinImg: React.FC<Props> = ({ className }) => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "winwin.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)
  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="winwin app store"
      draggable={false}
      fadeIn={false}
      loading="eager"
      className={className} />
  );
}
