const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const waterClockSchema = new Schema({
  currentMonth: String,
  currentYear: Number,
  currentMonthClock: Number,
  lastMonthClock: Number,
  waterPrice: Number,
  waterTyariff: Number,
  apartment: { type: Schema.Types.ObjectId, ref: "Apartment" },
});

module.exports = new mongoose.model("Water Clock", waterClockSchema);
