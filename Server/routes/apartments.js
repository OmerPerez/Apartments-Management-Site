const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();

const apartmentsController = require("../controllers/apartmentsController");

router.post("/create", apartmentsController.creatApartment);

router.delete("/apartment/delete/:id", apartmentsController.deleteApartment);

router.get("/checkEgreementExpired", apartmentsController.agreementHasExpired);

router.get(
  "/apartmentProfile/:apartmentId",
  apartmentsController.getApartmentById
);

router.get("/", apartmentsController.getAllApartment);

module.exports = router;
