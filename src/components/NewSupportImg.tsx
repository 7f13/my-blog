import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
interface Props {
  className?: string
}
export const NewSupportImg: React.FC<Props> = ({ className }) => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "newsupport.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)
  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="Rental InBody landing page"
      draggable={false}
      fadeIn={false}
      className={className} />
  );
}
