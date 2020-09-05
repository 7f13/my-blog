import React from "react"
import { HeaderMenu } from "@/components/HeaderMenu"
import { Link } from "gatsby"
interface Props {
  headerClassName?: string
}
const Logo = () => {
  return (
    <h1 className="dosis text-2xl md:text-4xl hover:text-teal-400">
      {" {Lepus} "}
    </h1>
  )
}
export const Header: React.FC<Props> = ({ headerClassName }) => {
  return (
    <header className={headerClassName && headerClassName}>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderMenu />
    </header>
  )
}
