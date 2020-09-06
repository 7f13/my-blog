import React from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Helmet } from "react-helmet"
import "@/styles/global.scss"
import "@/styles/prism-nord.scss"
interface Props {
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-4xl px-2 sm:px-4 mx-auto tracking-wider ">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header headerClassName="py-6 px-2 sm:px-0 flex justify-between items-center" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
