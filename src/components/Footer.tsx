import React from "react"
import GitHubIcon from "@/assets/github.svg"
import TwitterIcon from "@/assets/twitter.svg"
import InstagramIcon from "@/assets/instagram.svg"
import { SERVICE_TYPE } from "@/constants/paths"
import { SNS_LINKS } from "@/constants/paths"
import { Link } from "gatsby"
interface SnsLinkProps {
  link: LinkObj
}
interface LinkObj {
  to: string
  service: string
}
const SnsLink = ({ link }: SnsLinkProps) => {
  const { to, service } = link
  const className = "w-5 h-5 mr-3 fill-current text-black hover:text-teal-400"
  if (SERVICE_TYPE.TWITTER === service)
    return (
      <Link to={to}>
        <TwitterIcon className={className} />
      </Link>
    )
  else if (SERVICE_TYPE.INSTAGRAM === service)
    return (
      <Link to={to}>
        <InstagramIcon className={className} />
      </Link>
    )
  else if (SERVICE_TYPE.GITHUB === service)
    return (
      <Link to={to}>
        <GitHubIcon className={className} />
      </Link>
    )
  else return null
}

interface FooterLogoProps {
  className: string
}
const FooterLogo = ({ className }: FooterLogoProps) => {
  return <h1 className={className}>{" {Lepus} "}</h1>
}
export const Footer = () => {
  // breakpoint : sm
  return (
    <footer className="border-solid border-gray-200 border-t py-4 px-2 sm:px-12 ">
      <div className="flex flex-col sm:flex-row items-center justify-between sm:mb-6">
        <Link to="/">
          <FooterLogo className="dosis text-2xl my-4 md:text-2xl sm:m-0 hover:text-teal-400" />
        </Link>
        <div className="my-6">
          <p className="text-md font-light mb-2">Writer's social medias:</p>
          <ul className="flex items-center justify-center mb-6 sm:mb-0">
            {SNS_LINKS.map(link => {
              return <SnsLink link={link} />
            })}
          </ul>
        </div>
      </div>
      <p className="text-xs font-light text-center text-gray-800 ">
        &copy; 2020 Lepus
      </p>
    </footer>
  )
}
