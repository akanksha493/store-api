const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productsRouter = require("./routes/products");

const app = express();

//middlewares
app.use(express.json());

//routes/ use routers
app.get("/", function(req, res, next){
    res.send("<h1>Store API</h1><a href='/api/v1/products'>product API</a>")
})
app.use("/api/v1/products", productsRouter);


//connect DB and server
const port = process.env.PORT || 5000;
const start = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(port, console.log("server is listening on port", port));
    } catch (error) {
        console.log(error);
    }
}
start();

