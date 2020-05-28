const User = require("./models").user;
const TodoItem = require("./models").todoItem;

async function getUsers() {
  const allUsers = await User.findAll();
  return allUsers.map((user) => user.get({ plain: true }));
}

// getUsers().then((users) => console.log(users));

async function getTodoItems() {
  const todoItems = await TodoItem.findAll();
  return todoItems.map((todoItem) => todoItem.get({ plain: true }));
}

// getTodoItems().then((todoItems) => console.log(todoItems));

async function getUserByPk(id) {
  try {
    const user = await User.findByPk(id);
    return user.get({ plain: true });
  } catch (error) {
    console.error(error);
  }
}

// getUserByPk(3).then((user) => console.log(user));

async function createUser() {
  try {
    const user = await User.create({
      name: "Chetan Shetty",
      email: "chetan@shetty.com",
      phone: 456789,
    });
    return user.get({ plain: true });
  } catch (error) {
    console.error(error);
  }
}

// createUser().then((user) => console.log(user));

async function getImportant() {
  try {
    const importantItems = await TodoItem.findAll({
      where: { important: true },
    });
    return importantItems.map((item) => item.get({ plain: true }));
  } catch (error) {
    console.error(error);
  }
}

getImportant().then((items) => console.log(items));
