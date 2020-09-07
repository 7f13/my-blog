import React from "react"
import { ProfileImg } from "@/components/ProfileImg"
import { Link } from "gatsby"
export const Profile = () => {
  return (
    <>
      <p className="mb-3 sm:text-xl">書いた人</p>
      <div className="max-w-3xl mx-auto mb-12">
        <div className="rounded shadow-lg p-4 sm:p-8">
          <div className="flex flex-col xm:flex-row items-center justify-evenly ">
            {/* アイコン */}
            <div className="flex justify-start w-full mb-4  sm:mb-6 ">
              <ProfileImg className="w-20 h-20 sm:w-32 sm:h-32 rounded object-cove mr-4 sm:mr-6" />
              <div>
                <p className="mb-2 sm:text-2xl">Kosei Sakaguchi</p>
                <p className="text-xs mb-2 sm:text-base">
                  フロントエンドエンジニア / WEBデザイナー
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base">
              福岡市を拠点に、フリーランスとしてWEBサイト制作やWEBアプリケーション開発を行っています。フロントエンドと新しい技術と猫とHipHopが好きです！制作実績は
              <Link to="/works" className="underline text-gray-800">
                Works
              </Link>
              へどうぞ！
              ご興味を持っていただけましたら、お気軽にお声がけください🔥
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
