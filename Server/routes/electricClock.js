const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();

const electricClockController = require("../controllers/electricClockController");

router.post("/create", electricClockController.calcNewBill);

router.get(
  "/apartmentAllBills/:apartmentId",
  electricClockController.getBillByApartmentId
);

router.get("/", electricClockController.getAllBills);

module.exports = router;
