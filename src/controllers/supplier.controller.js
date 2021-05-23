const Supplier = require("../models/supplier.model");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Customer
  const supplier = new Supplier({
    namaSupplier: req.body.namaSupplier,
    lokasiSupplier: req.body.lokasiSupplier,
  });

  // Save Customer in the database
  Supplier.create(supplier, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating Jenis.",
      });
    else res.send(data);
  });
};
