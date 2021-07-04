# TODOアプリケーション(Node.js)

# Node.js準備
```
// package.jsonファイル生成
$ npm init --yes

// express, ejs, mysqlパッケージをインストール
$ npm install express ejs mysql

// nodemonパッケージインストール
$ npm install -g nodemon
```

# MySQL準備
「db.sql」ファイル参照

# 実行方法
```
// 通常実行方法
$ node app.js

// 以下コマンドで起動すると、jsファイルを変更すると自動でサーバ再起動をかけて実行可能
// ※要nodemonパッケージ
$ nodemon app.js
```
