import express from "express";
import bodyParser from "body-parser";
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let posts = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

app.post("/compose", (req, res) => {
  const post = {
    id: Date.now().toString(), 
    title: req.body.title,
    content: req.body.text,
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postId", (req, res) => {
  const requestedPost = posts.find(p => p.id === req.params.postId);
  if (requestedPost) {
    res.render("post.ejs", { post: requestedPost });
  } else {
    res.status(404).send("Post not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});