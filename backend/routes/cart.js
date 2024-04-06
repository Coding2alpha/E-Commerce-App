const express = require("express");
const router = express.Router();

const { addCartItem, getCartItems } = require("../controllers/cart");

router.route("/addCartItem").post(addCartItem);
router.route("/getCartItems").get(getCartItems);

module.exports = router;
