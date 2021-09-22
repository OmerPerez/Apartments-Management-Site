const electricClockSchema = require("../models/electricClock");

const getAllBills = (req, res) => {
  electricClockSchema.find().then((results) => {
    res.json(results);
  });
};

const getBillByApartmentId = (req, res) => {
  electricClockSchema
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
    electricPrice: req.body.electricPrice,
    electricTyariff: req.body.electricTyariff,
    apartment: req.body.apartment,
  };

  await electricClockSchema.create(newBill);

  res.json(newBill);
};

module.exports = {
  getAllBills,
  getBillByApartmentId,
  calcNewBill,
};
