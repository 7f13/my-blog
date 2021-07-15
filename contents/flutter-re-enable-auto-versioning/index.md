---
slug: "/flutter-re-enable-auto-versioning"
date: "2021-07-15"
title: "Flutterで1度無効になってしまった自動バージョン管理を再有効化する"
category: ["Flutter"]
featuredImage: F-flutter-re-enable-auto-versioning.png
published: true
---

# 起きている現象

Flutter では `pubspec.yaml` 上でアプリのバージョンとビルドナンバーを操作する機能があります。
(version: バージョン+ビルドナンバー)

```yaml
version: 1.0.64+2
```

しかし当機能の存在を知らず、`info.plist` や `app/build.gradle` にてアプリのバージョンを一度でも手動操作してしまった場合、FLutter の自動バージョニング管理下から外れてしまい、Flutter の ios と Android バージョンを一括で指定してくれる機能の恩恵を受けることが出来なくなります。

この記事ではこの一度無効になってしまった Flutter の自動バージョン管理を最有効化する手順を記します。

# ios での手順

`info.plist` の `CFBundleShortVersionString` の値を `$(FLUTTER_BUILD_NAME)`へ修正します。

```plist
	<key>CFBundleShortVersionString</key>
	<string>$(FLUTTER_BUILD_NAME)</string>
```

同様に `CFBundleVersion` を `${CFBundleVersion}` に修正します。

```plist
	<key>CFBundleVersion</key>
	<string>$(FLUTTER_BUILD_NUMBER)</string>
```

以上。ビルドし直してみるとバージョンが変わっているはずです。

# Android での手順

`android/app/build.gradle` が下記のようになっているか確認してください。

```gradle
def flutterRoot = localProperties.getProperty('flutter.sdk')
if (flutterRoot == null) {
    throw new GradleException("Flutter SDK not found. Define location with flutter.sdk in the local.properties file.")
}

def flutterVersionCode = localProperties.getProperty('flutter.versionCode')
if (flutterVersionCode == null) {
    throw new GradleException("versionCode not found. Define flutter.versionCode in the local.properties file.")
}

def flutterVersionName = localProperties.getProperty('flutter.versionName')
if (flutterVersionName == null) {
    throw new GradleException("versionName not found. Define flutter.versionName in the local.properties file.")
}
```

次に、`defaultConfig` の `versionCode` を `flutterVersionCode.toInteger()`に、`versionName` を `flutterVersionName` に設定してください。

```gradle
android {
  ...
  defaultConfig {
    ...
    versionCode flutterVersionCode.toInteger()
    versionName flutterVersionName
  }
}
```

以上です。
