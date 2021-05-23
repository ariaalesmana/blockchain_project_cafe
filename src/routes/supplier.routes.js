module.exports = (app) => {
  const supplier = require("../controllers/supplier.controller.js");

  // Create a new Customer
  app.post("/daftarSupplier", supplier.create);
};
