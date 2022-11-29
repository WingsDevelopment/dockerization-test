let currentId = 0;
let tags = [];

function createNewDummyTag(newId) {
  return {
    id: newId,
    title: `Tag ${newId}`,
    description: `Tag ${newId} description`,
    urlSlug: `tag-${newId}`,
    createdAt: new Date(),
    updatedAt: new Date(),
    order: newId,
  };
}
tags = Array.from({ length: 10 }, (_, i) => createNewDummyTag(i));
currentId = tags.length;

function createNewTag(tag) {
  currentId++;
  return {
    id: currentId,
    title: tag.title,
    description: tag.description,
    urlSlug: tag.urlSlug,
    createdAt: new Date(),
    updatedAt: new Date(),
    order: tag.order,
  };
}

function updateTag(tag) {
  console.log(tag);
  const index = tags.findIndex((t) => t.id == tag.id);
  if (index === -1) {
    return null;
  }
  tags[index] = tag;
  return tag;
}

function deleteTag(id) {
  console.log(id);
  const index = tags.findIndex((t) => t.id == id);
  if (index === -1) {
    return null;
  }
  const tag = tags[index];
  tags.splice(index, 1);
  return tag;
}

module.exports = {
  tags,
  createNewTag,
  updateTag,
  deleteTag,
};
