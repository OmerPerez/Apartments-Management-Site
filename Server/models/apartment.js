const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  ownerFirstName: String,
  ownerLastName: String,
  ownerEmail: String,
  ownerPhone: Number,
  driveFoldersUrl: String,
  address: String,
  city: String,
  apartmentNumber: Number,
  apartmentArea: Number,
  postalCode: Number,
  numOfRooms: Number,
  housingUnitName: String,
  description: String,
  apartmentStatus: Boolean,
  agreement: String,
  images: [String],
  tenants: [{ type: Schema.Types.ObjectId, ref: "Tenant" }],
});

module.exports = new mongoose.model("Apartment", apartmentSchema);
