"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Project Submition",
          deadline: "EOD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Write Asssessment",
          deadline: "EOW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoItems", null, {});
  },
};
