'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      Id: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      CompanyName: {
        type: Sequelize.STRING
      },
      ContactName: {
        type: Sequelize.STRING
      },
      ContactTitle: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      Region: {
        type: Sequelize.STRING
      },
      PostalCode: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      Fax: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};