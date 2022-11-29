const { tags } = require("./tagsMock");
const { categories } = require("./categoriesMock");

let currentPostId = 0;
let posts = [];

function createNewDummyPost(newId) {
  return {
    id: newId,
    title: `Post ${newId}`,
    styledTitle: `<p>Styled Post ${newId}</p>`,
    description: `Post ${newId} description`,
    urlSlug: `post-${newId}`,
    content: `Post ${newId} content`,
    imagePath: `post-${newId}.jpg`,
    metaTitle: `Post ${newId} meta title`,
    metaDescription: `Post ${newId} meta description`,
    isVisible: true,
    showInCarouselHomePage: true,
    showInListHomePage: true,
    showInFaqList: true,
    mainFaqPost: false,
    showInNewsList: false,
    showInNewsSlider: false,
    categories: [categories[0]],
    tags: [tags[0], tags[1]],
  };
}

posts = Array.from({ length: 10 }, (_, i) => createNewDummyPost(i));
currentPostId = posts.length;

function createNewPost(post) {
  currentPostId++;
  const newTags = tags.filter((t) => post.tagIds?.includes(t.id.toString()));
  const newCategories = categories.filter((c) =>
    post.categoryIds?.includes(c.id.toString())
  );
  return {
    id: currentPostId,
    title: post.title,
    styledTitle: post.styledTitle,
    description: post.description,
    urlSlug: post.urlSlug,
    content: post.content,
    imagePath: post.imagePath,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
    isVisible: post.isVisible,
    showInCarouselHomePage: post.showInCarouselHomePage,
    showInListHomePage: post.showInListHomePage,
    showInFaqList: post.showInFaqList,
    mainFaqPost: post.mainFaqPost,
    showInNewsList: post.showInNewsList,
    showInNewsSlider: post.showInNewsSlider,
    categories: newCategories,
    tags: newTags,
  };
}

function updatePost(post) {
  const index = posts.findIndex((p) => p.id == post.id);
  if (index === -1) {
    return null;
  }
  const newTags = tags.filter((t) => post.tagIds?.includes(t.id.toString()));
  const newCategories = categories.filter((c) =>
    post.categoryIds?.includes(c.id.toString())
  );

  post.tags = newTags;
  post.categories = newCategories;

  delete post.tagIds;
  delete post.categoryIds;

  posts[index] = post;
  return post;
}

function deletePost(id) {
  const index = posts.findIndex((p) => p.id == id);
  if (index === -1) {
    return null;
  }
  const post = posts[index];
  posts.splice(index, 1);
  return post;
}

module.exports = {
  posts,
  createNewPost,
  updatePost,
  deletePost,
};
