'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      let customers = require('./Customers.json');
      return queryInterface.bulkInsert('Customers', customers, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Customers', null, {});
  }
};