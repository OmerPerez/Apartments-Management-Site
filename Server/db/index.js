const mongoose = require("mongoose");
const url =
  "mongodb+srv://db_user:omer200198@cluster0.nf5ea.mongodb.net/mySecendDatabase?retryWrites=true&w=majority";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((e) => {
    console.error("connection error", e);
  });

const db = mongoose.connection;
module.exports = db;
