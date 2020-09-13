---
slug: "/input-font-vscode"
date: "2020-09-13"
title: "開発者向けフォント「Input」をVisual Studio Codeのフォントに設定する"
category: ["VSCode"]
featuredImage: F-input-font-vscode.png
published: true
---

皆さんはフォントに拘りとかありますか？私はこの Input というフォントが結構好きです。  
![Inputのトップ画面](Input-top.png)
開発者向けのフォントで、形が似ていいて紛らわしい文字でもこのフォントだと容易に識別できるのでおすすめです。シルエットも普通に可愛いですしね。

[このあたり](https://input.fontbureau.com/info/)にフォント設計のストーリーが掲載されています。自分も全部は読めていないので時間を見つけて読みたいと思っていますが、かなり試行錯誤して設計された様子が十分に伝わってきますね。  
個人的にはこういうのを見ると自分も頑張ろうと、モチベーションが高まります。  
今回は Input を Mac + Visual Studio Code 環境で使用できるようにする方法のご紹介です。

# Input のインストール

まずは INPUT のインストールからです。公式サイトのダウンロードページへ行きます。  
[ダウンロードページ](https://input.fontbureau.com/download/)  
規約同意のチェックボックスにチェックを入れ、メールアドレスを入力後メールアドレスを入力後「Download Input for private use」をクリックします。  
 ![Inputのダウンロード画面](Input-download.png)
ダイアログが表示されますので「OK」をクリックします。  
![Inputのダウンロード時のダイアログ](download-dialog.png)

# Mac へ Input をインストールする

次は Mac へ先ほどダウンロードしてきた Input をインストールしていきます。まずは Font Book を起動してください。
![Font Bookの検索](search-fontbook.png)
ウィンドウ上部メニューにある「＋」ボタンをクリックします。
![fontbookの上部メニュー](fontbook-header.png)
ダウンロードしてきた「Input-Font」内の「Input_Fonts」を選択し、「Open」をクリックします。
![InputFontsを選択](Input-Fonts.png)
これで Mac へ Input をインストールすることが出来ました。
![InputFontsのインストールが完了](install-success.png)

# Visual Studio Code のフォントを設定する

最後です。まずは Visual Studio Code を開きます。  
左下の歯車アイコンから「Settings」をクリックします。
![VSCodeの歯車アイコン](vscode-setting-menu.png)
検索窓で「font family」と検索し、Font Family を以下のように設定します。このあたりはお好みで色々試されてみてください。

```
'Input Mono',Menlo, Monaco, 'Courier New', monospace
```

![VSCodeのFontFamily](font-family.png)
以上で完了です。反映されない場合は再起動を試して見てください。
