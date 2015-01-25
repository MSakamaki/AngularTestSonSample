AngularJSテスト課題雛形
===============

はじめに
------
AngularJSテストソン用テンプレート
masterはテンプレートで使い回し用(ある程度形が固まったらジェネレータにしたい)
イベント毎にブランチきりながら最初はやって行く予定


前準備
------

[Homebrew](http://brew.sh/), [node.js](http://nodejs.org/) はインストール済み

### npm

```sh
# 使用するツールをグローバルにインストール
npm i -g appium mocha bower grunt-cli protractor istanbul yo karma-cli generator-karma generator-mocha generator-angular-fullstack
```

開発開始
---------

```sh
git clone xxxxxx sample
cd sample
npm install
bower install
```

### ディレクトリ構成

```sh
├── Gruntfile.js
├── bower.json
├── package.json
├── client
│   ├── app
│   ├── assets
│   ├── components
│   └── index.html
├── e2e
│   ├── components
│   ├── functional_test
│   └── acceptance_test
├── karma.conf.js
├── protractor.acceptance.conf.js
├── protractor.functional.conf.js
├── report
│   ├── coverage
│   └── plato
└── server
    ├── api
    ├── auth
    ├── components
    ├── config
    ├── user
    └── views


```

### grunt タスク一覧

- 開発
    - `serve`     開発用アプリを立ち上げる
    - `server`    serveのalias
- テスト
    - `test` クライアントの単体テスト
    - `test:client` test の alias
    - `test:e2e` エンドtoエンドのテスト
    - `test:accept` 受け入れテスト
- レポート
    - `report:make` レポート生成
    - `report:view` レポートを見る
- ビルド
    - `build` リリース用ファイルを作り出す。  
     (client/components/constants/environments.costant.js.releace の設定でビルドする)
- 追加オプション
    - `env` デフォルト`unit`
     - `--env=unit`  単体テスト用の設定ファイルを使う
     - `--env=it`  結合テスト用の設定ファイルを使う
     - `--env=releace` リリース用の設定ファイルを使う
    - `ci` デフォルト`false`、レポート等のアウトプットがCI連携用の処理になる
     - `--ci=true` CI環境用の処理を行う

Protoractorの設定について
------

 + 継承関係

```sh
protractor.conf.js
├── protractor.acceptable.conf.js
│   └── protractor.acceptable.ci.conf.js
└── protractor.functional.conf.js
     └── protractor.functional.ci.conf.js
```

#### protractor.conf.js

 + protoractor全体の設定を定義している

#### protractor.acceptable.conf.js

 + protractor.conf.jsを継承
 + 受け入れテスト用のテストコードの読み取りを行う。

#### protractor.acceptable.ci.conf.js

 + protractor.acceptable.conf.jsを継承
 + レポート出力をXMLファイルに変化させる

#### protractor.functional.conf.js

 + protractor.conf.jsを継承
 + 機能テスト用のテストコードの読み取りを行う。

#### protractor.functional.ci.conf.js

 + protractor.functional.conf.jsを継承
 + レポート出力をXMLファイルに変化させる


その他
------

Angular.js デバッグツール

- [Batarang (Chrome アプリ)](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk)
- [ng-inspector for AngularJS(Chrome アプリ)](https://chrome.google.com/webstore/detail/ng-inspector-for-angularj/aadgmnobpdmgmigaicncghmmoeflnamj)
