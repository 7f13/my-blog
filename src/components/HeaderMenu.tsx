import React, { useState, useEffect } from "react"
import { useWindowSize } from "react-use"
import { HEADER_PATHS } from "@/constants/paths"
import { Link } from "gatsby"
import MenuIcon from "@/assets/menu.svg"
import { MobileMenu } from "@/components/MobileMenu"
export const HeaderMenu = () => {
  const [isMobileMenuOpen, toggleMobileMenuOpen] = useState(false)
  const [isMobile, toggleIsMobile] = useState(false)
  const { width } = useWindowSize()
  useEffect(() => {
    if (width < 640) {
      toggleIsMobile(true)
    }
  }, [width])
  return (
    <>
      {isMobile ? (
        <>
          <div
            className="p-2 rounded shadow-lg"
            onClick={() => toggleMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="w-6 h-6" />
          </div>
          <MobileMenu
            isOpen={isMobileMenuOpen}
            toggleOpen={toggleMobileMenuOpen}
          />
        </>
      ) : (
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
      )}
    </>
  )
}
