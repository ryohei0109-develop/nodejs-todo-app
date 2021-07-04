const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// MySQl接続
const connection = mysql.createConnection({
  host: "localhost",
  user: "user01",
  password: "testpassword",
  database: "tododb",
  dateStrings: true,
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM `todos`", (error, results) => {
    res.render("index.ejs", { todos: results });
  });
});

// 新規作成時画面描画
app.get("/detail", (req, res) => {
  res.render("detail.ejs", { todo: null });
});

// 更新時画面描画
app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM `todos` WHERE id = ?",
    [id],
    (error, results) => {
      res.render("detail.ejs", { todo: results[0] });
    }
  );
});

app.listen(3000);
