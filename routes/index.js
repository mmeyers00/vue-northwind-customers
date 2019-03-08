var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/total-customers', function(req, res) {
  models.Customer.findAll({attributes: ['ContactName']}).then(function(customers) {
    let pages = Math.ceil(customers.length/10);
        res.send(pages.toString());
  });
});

router.get('/customers/:page', function(req, res) {
  /*models.Customer.sequelize.query("SELECT ContactName as Name, ContactTitle as Title, Country FROM customers LIMIT 10").spread((customers) => {
    res.send(customers);
  });*/

  let offset = (req.params.page - 1) * 10;
  models.Customer.findAll({ attributes: [['ContactName', 'Name'], ['ContactTitle', 'Title'], 'Country'], offset: offset, limit: 10 }).then(function(customers) {
    res.send(customers);
  });
});

module.exports = router;