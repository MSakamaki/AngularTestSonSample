AngularJSテスト課題(2015-02-01)
===============

はじめに
------

2015-02-01開催したAngularJSテストソン用の課題です

[generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)をベースに作成してあります。

アプリケーションの仕様は[ドキュメント(wiki)](https://github.com/MSakamaki/AngularTestSonSample/wiki/2015-02-01-Testson-Application-Spec)を参照してください。

テストコードだけでなく、テストしやすいようにリファクタや構成も弄ってもらってかまいません。


前準備
------

[Homebrew](http://brew.sh/), [node.js](http://nodejs.org/) はインストール済み

### npm

```sh
# 使用するツールをグローバルにインストール
npm i -g mocha bower grunt-cli protractor istanbul yo karma-cli generator-karma generator-mocha generator-angular-fullstack
```

開発開始
---------

```sh
git clone https://github.com/MSakamaki/AngularTestSonSample.git -b hackathon/20150201 hack20150201
cd hack20150201
npm install
```

実行
----------

```sh
grunt serve
```

### ディレクトリ構成

```sh
├── Gruntfile.js
├── README.md
├── bower.json
├── client # karmaで行う単体テストはこのディレクトリにあります。grunt testで動作します
│   ├── app
│   ├── assets
│   ├── bower_components
│   ├── components
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── e2e # protractorで行うe2eテストはこのディレクトリにあります。
│   ├── README.md
│   ├── acceptance_test # grunt test:acceptで動作します
│   ├── components
│   └── functional_test # grunt test:e2eで動作します
├── karma.ci.conf.js
├── karma.conf.js
├── node_modules
│   └── ....
├── package.json
├── protractor
│   └── .. # protractorの設定ファイル
├── report
│   ├── coverage # カバレッジレポート
│   └── plato    # コードメトリクス
└── server
    ├── api  # API設定
    ├── app.js
    ├── auth
    ├── components
    ├── config
    ├── routes.js
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
    - `test:e2e` End to Endのテスト
    - `test:accept` 受け入れテスト
- レポート
    - `report:make` レポート生成
    - `report:view` レポートを見る
    - `report:ci`   XMLレポートを生成
- ビルド
    - `build` リリース用ファイルを作り出す。  
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

### Angular.js デバッグツール

- [Batarang (Chrome アプリ)](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk)
- [ng-inspector for AngularJS(Chrome アプリ)](https://chrome.google.com/webstore/detail/ng-inspector-for-angularj/aadgmnobpdmgmigaicncghmmoeflnamj)
