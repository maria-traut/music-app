import express from "express";
import nunjucks from "nunjucks";
import path from "node:path";
import albums from "./assets/albums.json";
import type { IAlbum } from "./types";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("index.html", { title: "Home" });
});

const allAlbums = albums as IAlbum[];

app.get("/albums", (req, res) => {
  res.render("albums.html", { title: "Albums", albums: allAlbums });
});

app.get("/favorites", (req, res) => {
  res.render("favorites.html", { title: "Favorites" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
