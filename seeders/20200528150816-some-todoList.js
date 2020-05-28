"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Leo Messi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dan Abramov",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoLists", null, {});
  },
};
