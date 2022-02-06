const db = require("../models");
const main = require("./main.controller");
const Product = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    // console.log(req.headers.authorization);
    const validated = req.headers.authorization && main.verifyApiKey(req.headers.authorization, res);
    if (validated) {
        if (!req.body.title) {
            res.status(400).send({
                message: `"Content cannot be empty!"`
            });
            return;
        }
        // Create a Product
        const product = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        };
        // Save Product in the db
        Product.create(product)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the product."
                });
            });
    }
};

// Retrieve all Products from the db.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Product.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Product.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find product with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving product with id=" + id
            });
        });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Product.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "product was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating product with id=" + id
            });
        });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Product.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "product was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete product with id=${id}. Maybe product was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete product with id=" + id
            });
        });
};