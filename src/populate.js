require("dotenv").config();

const connectDb = require("./db/connectDb");
const Product = require("./models/product.model");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI);

    // Delete all products and populate the db with products from JSON file
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Data import success");

    // Close the connection
    process.exit(0);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

start();