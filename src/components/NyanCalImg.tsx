import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
interface Props {
  className?: string
}
export const NyanCalImg: React.FC<Props> = ({ className }) => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "nyancal.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)
  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="NyanCal app"
      draggable={false}
      fadeIn={false}
      className={className} />
  );
}
