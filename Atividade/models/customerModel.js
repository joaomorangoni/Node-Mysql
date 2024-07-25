const db = require('../config/database');

const Customer = {
  getAllCustomers: (callback) => {
    db.query('SELECT * FROM customers', callback);
  },
  getCustomerById: (id, callback) => {
    db.query('SELECT * FROM customers WHERE id = ?', [id], callback);
  },
  addCustomer: (customer, callback) => {
    db.query('INSERT INTO customers SET ?', customer, callback);
  },
  updateCustomer: (id, customer, callback) => {
    db.query('UPDATE customers SET ? WHERE id = ?', [customer, id], callback);
  },
  deleteCustomer: (id, callback) => {
    db.query('DELETE FROM customers WHERE id = ?', [id], callback);
  }
};

module.exports = Customer;