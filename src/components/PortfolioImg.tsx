import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
interface Props {
  className?: string
}
export const PortfolioImg: React.FC<Props> = ({ className }) => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "portfolio.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)
  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="portfolio"
      draggable={false}
      fadeIn={false}
      className={className} />
  );
}
