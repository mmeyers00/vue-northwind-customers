'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    Id: { 
        type: DataTypes.STRING, 
        primaryKey: true 
    },
    CompanyName: DataTypes.STRING,
    ContactName: DataTypes.STRING,
    ContactTitle: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    Region: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Country: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Fax: DataTypes.STRING
  },
  {
    timestamps: false
  });

  return Customer;
};