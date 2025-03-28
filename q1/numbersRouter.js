const express = require("express");
const router = express.Router();
const numbersController = require("./numbersController");
router.get("/:numberId", numbersController);

module.exports = router;
