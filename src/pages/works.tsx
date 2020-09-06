import React from "react"
import { Layout } from "@/components/Layout"
import { SEO } from "@/components/SEO"
import WorksSvg from "@/assets/works.svg"
import { GonowImg } from "@/components/GonowImg"
import { NewSupportImg } from "@/components/NewSupportImg"
import { NyanCalImg } from "@/components/NyanCalImg"
import { WorkCard } from "@/components/WorkCard"
import { Hero } from "@/components/Hero"
import { PortfolioImg } from "@/components/PortfolioImg"
export const WorksPage = () => {
  return (
    <Layout>
      <SEO title="Works" />
      <Hero title="Works" reverse>
        <WorksSvg />
      </Hero>
      <h2 className="text-center text-xl font-extrabold mb-6">All</h2>
      <div className="sm:px-20">
        <a href="https://5-now.com/" target="_blank">
          <WorkCard
            title="GoNOW - ゼロスペック株式会社様"
            subtitle="ランディングページ制作"
            body="IoT技術を活用した灯油自動発注配送 管理システム「GoNOW(ゴーナウ)」のリリースにあたり、ランディングページの制作を行わせて頂きました！"
          >
            <GonowImg className="w-4/5 rounded sm:w-5/12" />
          </WorkCard>
        </a>
        <a href="https://rental.newsupport.co.jp/" target="_blank">
          <WorkCard
            title="Rental Inbody - 株式会社New Support様"
            subtitle="ランディングページ制作"
            body="生体電気インピーダンス分析(BIA)法を用いた体成分分析装置InBody(インボディ)のレンタルサービスを行っている株式会社New Support様のランディングページを制作させて頂きました！"
            reverse
          >
            <NewSupportImg className="w-4/5 rounded sm:w-5/12" />
          </WorkCard>
        </a>
        <a href="https://loving-swirles-44e3b8.netlify.app/" target="_blank">
          <WorkCard
            title="ポートフォリオ デモ - 個人開発"
            subtitle="WEBサイト制作"
            body="Headless CMSを用いて、デザインやアニメーションの練習も兼ねてポートフォリオサイトをテーマに
            WEBサイトのデモを制作しました。"
          >
            <PortfolioImg className="w-4/5 rounded sm:w-5/12" />
          </WorkCard>
        </a>
        <a href="https://nyancal.vercel.app/" target="_blank">
          <WorkCard
            title="NyanCal(にゃんかる) スマホ用 - 個人開発"
            subtitle="カロリー計算アプリ開発"
            body="猫の1日に必要なエネルギー要求量(Daily Energy Requirement:DER)及び餌の量を計算できるアプリを開発しました。"
            reverse
          >
            <NyanCalImg className="w-4/5 rounded sm:w-5/12" />
          </WorkCard>
        </a>
      </div>
    </Layout>
  )
}
export default WorksPage
