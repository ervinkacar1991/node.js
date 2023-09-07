const path = require("path");
const express = require("express");

const routeDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(routeDir, "views", "shop.html"));
});

module.exports = router;
