const express = require("express");
var bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");
var cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
const port = 3000;
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const { createNewTag, updateTag, deleteTag, tags } = require("./tagsMock");
const { createNewPost, updatePost, deletePost, posts } = require("./postsMock");
const {
  createNewCategory,
  updateCategory,
  deleteCategory,
  categories,
} = require("./categoriesMock");

app.get("/", (req, res) => res.send("Hello from rhino mock server!"));

// ------------------- TAGS -------------------
app.post("/createTag", jsonParser, (req, res) => {
  const newTag = createNewTag(req.body);
  tags.push(newTag);
  res.send(newTag.id.toString());
});
app.get("/tags", (req, res) => res.send(tags));
app.put("/updateTag", jsonParser, (req, res) => {
  const tag = updateTag(req.body);
  if (!tag) {
    res.status(404).send("Tag not found");
    return;
  }
  res.send(tag.id.toString());
});
app.delete("/deleteTag/:id", (req, res) => {
  const tag = deleteTag(req.params.id);
  if (!tag) {
    res.status(404).send("Tag not found");
    return;
  }
  res.send(tag.id);
});
app.get("/tag/:id", (req, res) => {
  const tag = tags.find((t) => t.id == req.params.id);
  if (!tag) {
    res.status(404).send("Tag not found");
    return;
  }
  res.send(tag);
});

// ------------------- Posts -------------------
app.post("/createPost", jsonParser, (req, res) => {
  const newPost = createNewPost(req.body);
  posts.push(newPost);
  res.send(newPost.id);
});

app.get("/posts", (req, res) => res.send(posts));

app.put("/updatePost", jsonParser, (req, res) => {
  const post = updatePost(req.body);
  if (!post) {
    res.status(404).send("Post not found");
    return;
  }
  res.send(post.id);
});

app.delete("/deletePost/:id", (req, res) => {
  const post = deletePost(req.params.id);
  if (!post) {
    res.status(404).send("Post not found");
    return;
  }
  res.send(post.id);
});

app.get("/post/:id", (req, res) => {
  const post = posts.find((p) => p.id == req.params.id);
  if (!post) {
    res.status(404).send("Post not found");
    return;
  }
  res.send(post);
});
// ------------------- Categories -------------------
app.post("/createCategory", jsonParser, (req, res) => {
  const newCategory = createNewCategory(req.body);
  categories.push(newCategory);
  res.send(newCategory.id);
});

app.get("/categories", (req, res) => res.send(categories));

app.put("/updateCategory", jsonParser, (req, res) => {
  const category = updateCategory(req.body);
  if (!category) {
    res.status(404).send("Category not found");
    return;
  }
  res.send(category.id);
});

app.delete("/deleteCategory/:id", (req, res) => {
  const category = deleteCategory(req.params.id);
  if (!category) {
    res.status(404).send("Category not found");
    return;
  }
  res.send(category.id);
});

app.get("/category/:id", (req, res) => {
  const category = categories.find((c) => c.id == req.params.id);
  if (!category) {
    res.status(404).send("Category not found");
    return;
  }
  res.send(category);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () =>
  console.log(`Mock express api listening on port ${port}!`)
);
