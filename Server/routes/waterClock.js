const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();

const waterClockController = require("../controllers/waterClockController");

router.post("/create", waterClockController.calcNewBill);

router.get(
  "/apartmentWaterBills/:apartmentId",
  waterClockController.getBillByApartmentId
);

router.get("/", waterClockController.getAllBills);

module.exports = router;
