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

// 一覧画面
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

// save処理
app.post("/save", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;

  if (id > 0) {
    updateTodo(id, title, description);
  } else {
    insertTodo(title, description);
  }

  res.redirect("/");
});

const insertTodo = function (title, description) {
  connection.query(
    "INSERT INTO `todos` (`title`, `description`) VALUES (?, ?)",
    [title, description],
    (error, results) => {
      return true;
    }
  );
};

const updateTodo = function (id, title, description) {
  connection.query(
    "UPDATE `todos` SET `title` = ?, `description` = ? WHERE `id` = ?",
    [title, description, id],
    (error, results) => {
      return true;
    }
  );
};

app.listen(3000);
