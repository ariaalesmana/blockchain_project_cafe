module.exports = (app) => {
  const supplier = require("../controllers/supplier.controller.js");

  // Create a new Customer
  app.post("/daftarSupplier", supplier.create);

  // Retrieve all Customers
  app.get("/getSupplier", supplier.findAll);
};
