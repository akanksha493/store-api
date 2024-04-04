require("dotenv").config();
const mongoose = require("mongoose");
const productModel = require("./models/product");

const data = require("./products.json");


const main = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected.");
        await productModel.deleteMany();
        console.log("Collection Cleared");
        await productModel.create(data);
        console.log("success");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
main();
