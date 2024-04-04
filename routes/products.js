const express = require("express");
const router = express.Router();
const productController = require("../controller/products");

router.get("/", productController.getAllProducts);


module.exports = router;