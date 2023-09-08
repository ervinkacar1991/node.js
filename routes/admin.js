const path = require("path");
const express = require("express");

const routeDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product => GE

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(routeDir, "views", "add-product.html"));
});

// /admin/add-product => POST

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router;

exports.routes = router;
exports.products = products;
