import React, { useState } from "react"
import { useWindowSize } from "react-use"
import { HEADER_PATHS } from "@/constants/paths"
import { Link } from "gatsby"
import MenuIcon from "@/assets/menu.svg"
import { MobileMenu } from "@/components/MobileMenu"
export const HeaderMenu = () => {
  const [isMobileMenuOpen, toggleMobileMenuOpen] = useState(false)
  const { width } = useWindowSize()
  if (width > 639)
    return (
      <nav className="list-none flex">
        {/* 右端の要素はmargin rightなし */}
        {HEADER_PATHS.map((path, i) => {
          return HEADER_PATHS.length + 1 !== i ? (
            <Link key={path.to} to={path.to} className="mr-2">
              <li className="py-2 px-3 hover:text-teal-400">
                {path.displayName}
              </li>
            </Link>
          ) : (
            <Link key={path.to} to={path.to}>
              <li>{path.displayName}</li>
            </Link>
          )
        })}
      </nav>
    )

  return (
    <>
      <div
        className="p-2 rounded shadow-lg"
        onClick={() => toggleMobileMenuOpen(!isMobileMenuOpen)}
      >
        <MenuIcon className="w-6 h-6" />
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} toggleOpen={toggleMobileMenuOpen} />
    </>
  )
}
