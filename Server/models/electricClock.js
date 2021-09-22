const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const electricClockSchema = new Schema({
  currentMonth: String,
  currentYear: Number,
  currentMonthClock: Number,
  lastMonthClock: Number,
  electricPrice: Number,
  electricTyariff: Number,
  apartment: { type: Schema.Types.ObjectId, ref: "Apartment" },
});

module.exports = new mongoose.model("Electric Clock", electricClockSchema);
