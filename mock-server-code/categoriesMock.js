let currentCategodyId = 0;
let categories = [];

function createNewDummyCategory(newId) {
  return {
    id: newId,
    title: `Category ${newId}`,
    description: `Category ${newId} description`,
    createdAt: new Date(),
    updatedAt: new Date(),
    order: newId,
  };
}

categories = Array.from({ length: 10 }, (_, i) => createNewDummyCategory(i));
currentCategodyId = categories.length;

function createNewCategory(category) {
  currentCategodyId++;
  return {
    id: currentCategodyId,
    title: category.title,
    description: category.description,
    createdAt: new Date(),
    updatedAt: new Date(),
    order: category.order,
  };
}

function updateCategory(category) {
  const index = categories.findIndex((c) => c.id == category.id);
  if (index === -1) {
    return null;
  }
  categories[index] = category;
  return category;
}

function deleteCategory(id) {
  const index = categories.findIndex((c) => c.id == id);
  if (index === -1) {
    return null;
  }
  const category = categories[index];
  categories.splice(index, 1);
  return category;
}

module.exports = {
  categories,
  createNewCategory,
  updateCategory,
  deleteCategory,
};
