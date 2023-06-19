const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "agmr_3.0",
});

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  const sql =
    "INSERT INTO userprofile (`username`, `email`, `password`) VALUES (?, ?, ?)";
  const values = [username, email, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json("Username or email already exists.");
      } else {
        return res.status(500).json("Error inserting data into the database.");
      }
    }
    return res.status(200).json("Data inserted successfully.");
  });
});

app.post("/agmr_3.0", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM userprofile WHERE `username` = ? AND `password` = ?";
  db.query(sql, [username, password], (err, data) => {
    if (err) {
      return res.status(500).json("Error");
    }
    if (data.length > 0) {
      return res.status(200).json("Login successful.");
    } else {
      return res.status(401).json("Invalid username or password.");
    }
  });
});

app.listen(8081, () => {
  console.log("Listening...");
});
