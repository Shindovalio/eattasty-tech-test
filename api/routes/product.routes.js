module.exports = app => {
    const products = require("../controllers/product.controller.js");
    var router = require("express").Router();

    // CREATE a new product
    router.post("/", products.create);

    // READ all products
    router.get("/", products.findAll);

    // READ a single product by id
    router.get("/:id", products.findOne);

    // UPDATE a product by id
    router.put("/:id", products.update);

    // DELETE a product by id
    router.delete("/:id", products.delete);

    app.use('/api/products', router);
};