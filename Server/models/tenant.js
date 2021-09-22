const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  phone: Number,
  gender: String,
  emailAddress: String,
  dateOfEntry: {
    type: Date,
    default: Date.now(),
  },
  dateOfEnd: {
    type: Date,
    default: Date.now(),
  },
  apartment: { type: Schema.Types.ObjectId, ref: "Apartment" },
});

module.exports = new mongoose.model("Tenant", tenantSchema);
