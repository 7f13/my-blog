import React from "react"
import { PageRendererProps } from "gatsby"
import { Layout } from "@/components/Layout"
import { SEO } from "@/components/SEO"
import { AllBlogPosts } from "@/components/AllBlogPosts"
import TopSVG from "@/assets/programming.svg"
interface Props {
  props: PageRendererProps
}
const IndexPage = (props: Props) => {
  return (
    <Layout>
      <SEO title="Blogs - Lepus" />
      <div className="flex flex-col sm:flex-row justify-evenly items-center mb-6">
        <div>
          <h2 className="text-4xl  sm:mb-6 text-center">Blogs</h2>
          {/* 主要なカテゴリ */}
          {/* <div className="flex items-center">
            <p className="py-1 px-2 underline cursor-pointer hover:text-teal-400">
              All
            </p>
            <p className="py-1 px-2 underline cursor-pointer hover:text-teal-400">
              Gatsby.js
            </p>
            <p className="py-1 px-2 underline cursor-pointer hover:text-teal-400">
              Next.js
            </p>
          </div> */}
        </div>
        <TopSVG />
      </div>
      <AllBlogPosts />
    </Layout>
  )
}

export default IndexPage
