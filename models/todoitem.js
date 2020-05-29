"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoItem = sequelize.define(
    "todoItem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
    },
    {}
  );
  todoItem.associate = function (models) {
    todoItem.belongsTo(models.todoList);
    todoItem.belongsToMany(models.tag, {
      through: "itemTags",
      foreignKey: "todoItemId",
    });
  };
  return todoItem;
};
