const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();

const tenantsController = require("../controllers/tenantsController");

router.get("/profile/:tenantId", tenantsController.getTenantById);

router.get(
  "/apartment/:apartmentId",
  tenantsController.getTenantsByApartmentId
);

router.post("/create", tenantsController.createNewTenant);

router.delete("/delete/:id", tenantsController.deleteTenant);
router.get("/", tenantsController.getAllTenants);

// router.get("/apartment", tenantsController.getTenantsByApartment);

module.exports = router;
