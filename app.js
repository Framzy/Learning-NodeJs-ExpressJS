import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

app.get("/", (req, res) => {
  const mhs = [
    {
      nama: "farden",
      kelas: "rq",
    },
    {
      nama: "ramzy",
      kelas: "rq",
    },
    {
      nama: "muharram",
      kelas: "rq",
    },
  ];
  const vocals = {
    layout: "layouts/main-layout",
    title: "Home Page",
    nama: "farden",
    mhs,
  };
  res.render("index", vocals);
});

app.get("/about", (req, res) => {
  const vocals = {
    layout: "layouts/main-layout",
    title: "About Page",
  };
  res.render("about", vocals);
});

app.get("/contact", (req, res) => {
  const vocals = {
    layout: "layouts/main-layout",
    title: "Contact Page",
  };
  res.render("contact", vocals);
});

app.get("/product/:id", (req, res) => {
  res.render("product");
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
