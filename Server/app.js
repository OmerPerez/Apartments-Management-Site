const express = require("express");
const db = require("./db/index");
const bodyParser = require("body-parser");
const apartments = require("./routes/apartments");
const tenants = require("./routes/tenants");
const electricClock = require("./routes/electricClock");
const waterClock = require("./routes/waterClock");

const cors = require("cors");
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on("error", (error) => {
  console.log(error);
});

app.use("/", apartments);
app.use("/tenants", tenants);
app.use("/electric", electricClock);
app.use("/water", waterClock);

app.listen(8081);
