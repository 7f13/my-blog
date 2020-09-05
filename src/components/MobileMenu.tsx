import React from "react"
import { HEADER_PATHS } from "@/constants/paths"
import { Link } from "gatsby"
interface Props {
  isOpen: boolean
  toggleOpen: (isOpen: boolean) => void
}
export const MobileMenu: React.FC<Props> = ({ isOpen, toggleOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center bg-white text-gray-800">
          <ul className="mb-32">
            {HEADER_PATHS.map(link => (
              <Link to={link.to} key={link.to}>
                <li className="mb-2 text-3xl font-light text-center">
                  {link.displayName}
                </li>
              </Link>
            ))}
          </ul>
          <div onClick={() => toggleOpen(!isOpen)}>CLOSE</div>
        </div>
      )}
    </>
  )
}
