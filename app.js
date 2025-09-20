import express from "express";
import path from "path";
import { __dirname } from "./utils/path.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/about.html"));
});

app.get("/product/:id", (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> 
    Category : ${req.query.category} `);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
