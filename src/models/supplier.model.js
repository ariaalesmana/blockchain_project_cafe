const sql = require("./db");

// constructor
const Supplier = function (supplier) {
  this.namaSupplier = supplier.namaSupplier;
  this.lokasiSupplier = supplier.lokasiSupplier;
};

Supplier.create = (newSupplier, result) => {
  sql.query("INSERT INTO supplier SET ?", newSupplier, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created jenis: ", { id: res.insertId, ...newSupplier });
    result(null, { id: res.insertId, ...newSupplier });
  });
};

module.exports = Supplier;
