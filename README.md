AngularJSテスト課題雛形
===============

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

### grunt タスク一覧

- 開発
    - `serve`     開発用アプリを立ち上げる  
    (client/components/constants/environments.costant.js.unit の設定で動作する)
    - `serve:it`  結合環境へ接続する為のサーバーを立ち上げる  
    (client/components/constants/environments.costant.js.integration の設定で動作する)
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
