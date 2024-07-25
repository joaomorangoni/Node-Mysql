const Customer = require('../models/customerModel');

exports.listCustomers = (req, res) => {
  Customer.getAllCustomers((err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.render('listCustomers', { data: rows });
    }
  });
};

exports.addCustomerForm = (req, res) => {
  res.render('addCustomer');
};

exports.addCustomer = (req, res) => {
  const newCustomer = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };
  Customer.addCustomer(newCustomer, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.redirect('/customers');
    }
  });
};

exports.editCustomerForm = (req, res) => {
  const id = req.params.id;
  Customer.getCustomerById(id, (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.render('editCustomer', { data: rows[0] });
    }
  });
};

exports.updateCustomer = (req, res) => {
  const id = req.params.id;
  const updatedCustomer = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };
  Customer.updateCustomer(id, updatedCustomer, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.redirect('/customers');
    }
  });
};

exports.deleteCustomer = (req, res) => {
  const id = req.params.id;
  Customer.deleteCustomer(id, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.redirect('/customers');
    }
  });
};