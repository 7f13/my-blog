import React from "react"
import { Layout } from "@/components/Layout"
import { SEO } from "@/components/SEO"
import { Hero } from "@/components/Hero"
import ContactSvg from "@/assets/contact.svg"
const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero title="Contact">
        <ContactSvg />
      </Hero>
      <h2 className="text-center text-xl font-extrabold mb-6">Email</h2>
      <a href="mailto: k-sakaguchi@lepus.co.jp">
        <h3 className="text-center text-2xl sm:text-4xl font-light mb-12">
          k-sakaguchi@lepus.co.jp
        </h3>
      </a>
      <p className="text-center mb-12 text-xs sm:text-sm font-gray-800">
        TwitterやInstagramのDM等でも
        <br />
        お問い合わせを受け付けております！
      </p>
    </Layout>
  )
}
export default ContactPage
