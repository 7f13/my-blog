import React from "react"
import { Layout } from "@/components/Layout"
import { SNS_LINKS, SERVICE_TYPE } from "@/constants/paths"
import { Link } from "gatsby"
import SpaceSvg from "@/assets/space.svg"
import { ProfileImg } from "@/components/ProfileImg"
export default function AboutPage() {
  const twitterLink = SNS_LINKS.filter(
    link => SERVICE_TYPE.TWITTER === link.service
  ).shift()
  return (
    <Layout>
      <div className="flex flex-col-reverse sm:flex-row justify-evenly items-center my-12">
        <SpaceSvg />
        <h2 className="text-4xl  sm:mb-6 text-center">About</h2>
      </div>
      <div className="px-2 mx-auto">
        <h3 className="text-xl text-center mb-6 font-extrabold">
          Introduction
        </h3>
        <p className="mb-4 sm:px-20">
          {"{Lepus}"}は、
          <a href={twitterLink!.to} target="_blank">
            (@Sakaguchi01528)
          </a>
          が運営する技術系個人ブログです。
          <br />
          <br />
          主にNext.jsやGatsby.js等のReactアプリケーションフレームワークや、サーバレスアーキテクチャ関連の技術やサービスについての記事を更新しています。
          <br />
          <br />
          この辺りの技術はまだまだ日本ではメジャーではなく、少し複雑なことをしようとすると思うように日本語の情報を得られないことも多いです。僅かでもどなたかのお役にたれてばと思い当ブログを運営しています。
          <br />
          <br />
          {"{Lepus}"}
          はGatsby.jsで構築されています。
          <br />
          独自実装した機能は少なく、一部を除いて殆どがpluginで実装できました。
          <br />
          <br />
          使用したplugin等については記事へまとめておりますのでご参照いただくか、お気軽にお尋ねください！
          <br />
          <br />
          また、{" "}
          <a href={twitterLink!.to} target="_blank">
            (@Sakaguchi01528)
          </a>
          はお仕事も絶賛募集中です！自走力の高さには自信があります。極めて少数、または個人での開発でパフォーマンスを発揮できます。WEBサイト制作やWEBアプリケーション開発にお困りの方はお気軽にご連絡ください！
        </p>
        <Link to="/contact">
          <button className="mx-auto py-2 px-4 rounded border border-solid border-gray-600 text-gray-800 mb-12  block hover:border-teal-200 hover:text-teal-400">
            Contact
          </button>
        </Link>
        <h2 className="text-xl text-center mb-6 font-extrabold">About me</h2>
        {/* <div className="flex flex-col items-center xl:items-start xl:flex-row mb-6"> */}
        <ProfileImg className="rounded shadow-lg w-56 h-48 sm:w-64 sm:h-56 mb-4 max-w-xs min-w-md object-cover mx-auto" />
        <div>
          <p className="text-xl text-center ">Kosei Sakaguchi</p>
          <p className="text-gray-700 text-md text-center mb-6">
            WEBエンジニア
          </p>
          <p className="mb-6 sm:px-20">
            福岡市を拠点として活動するフリーランスエンジニアです。
            Next.jsやGatsby.js、TypeScriptをメイン技術として使用しています。
            <br />
            <br />
            元々はJavaでサーバーサイドの開発をしていましたが、最近のフロントエンド周辺技術や、サーバーレスアーキテクチャに次世代の可能性を感じ、独立後、上記関連技術を中心にお仕事を頂いています。
            <br />
            <br />
            アプリ開発以外にも、LP作成やCMSを導入したWEBサイトの構築、改修など幅広く対応させて頂いております。
            <br />
            <br />
            デザインにも関心があり、シンプルで機能的かつモダンなデザインが好きです。
            <br />
            <br />
            黒猫と暮らしています。HipHopをよく聴きます！好きな食べ物は🐟
          </p>
        </div>
        {/* </div> */}
        <Link to="/works">
          <button className="mx-auto p-2 rounded border border-solid border-gray-600 text-gray-800 mb-12  block hover:border-teal-200 hover:text-teal-400">
            制作実績をみる
          </button>
        </Link>
      </div>
    </Layout>
  )
}
