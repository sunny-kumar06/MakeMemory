require("dotenv").config();

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to MongoDB");
}

main().catch((err) => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Database seeded successfully 🌱");
  mongoose.connection.close();
};

initDB();