const mongoose = require("mongoose");
require("dotenv").config();

mongodbConnect().catch((err) => console.log(err));

async function mongodbConnect() {
  await mongoose.connect(process.env.MONGO_URI);
}

module.exports = mongodbConnect;
