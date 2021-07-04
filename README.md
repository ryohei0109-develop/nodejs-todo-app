# TODOアプリケーション(Node.js)

## 画面イメージ
- 一覧画面
<img width="1440" alt="スクリーンショット 2021-07-04 23 56 42" src="https://user-images.githubusercontent.com/69568236/124389773-a793b080-dd23-11eb-9c28-5aece1d3b537.png">

- 編集画面
<img width="960" alt="スクリーンショット 2021-07-04 23 58 10" src="https://user-images.githubusercontent.com/69568236/124389798-c1cd8e80-dd23-11eb-8cb2-fa2493cd98e0.png">


## Node.js準備
```
// package.jsonファイル生成
$ npm init --yes

// express, ejs, mysqlパッケージをインストール
$ npm install express ejs mysql

// nodemonパッケージインストール
$ npm install -g nodemon
```

## MySQL準備
「db.sql」ファイル参照

## 実行方法
```
// 通常実行方法
$ node app.js

// 以下コマンドで起動すると、jsファイルを変更すると自動でサーバ再起動をかけて実行可能
// ※要nodemonパッケージ
$ nodemon app.js
```
