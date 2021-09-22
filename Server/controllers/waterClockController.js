const waterClockSchema = require("../models/waterClock");

const getAllBills = (req, res) => {
  waterClockSchema.find().then((results) => {
    res.json(results);
  });
};

const getBillByApartmentId = (req, res) => {
  waterClockSchema
    .find({ apartment: req.params.apartmentId })
    .then((results) => {
      res.json(results);
    });
};

const calcNewBill = async (req, res) => {
  const newBill = {
    currentMonth: req.body.currentMonth,
    currentYear: req.body.currentYear,
    currentMonthClock: req.body.currentMonthClock,
    lastMonthClock: req.body.lastMonthClock,
    waterPrice: req.body.waterPrice,
    waterTyariff: req.body.waterTyariff,
    apartment: req.body.apartment,
  };

  await waterClockSchema.create(newBill);

  res.json(newBill);
};

module.exports = {
  getAllBills,
  getBillByApartmentId,
  calcNewBill,
};
