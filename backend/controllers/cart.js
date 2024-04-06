const User = require("../models/User");

const addCartItem = async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.user);
    const cart = await User.findById(req.user.userId);
    // if(cart)
    // {
    //     res.json("product is added to cart");
    // }
    // cart = await Cart.create({
    //   _id: req.user.userId,
    //   items: [{ _id: req.body.id, quantity: 1 }],
    // });
    const cartItems = cart.addItemToCart(req.body.id, 1);
    // console.log(cartItems);
    res.json("product added to cart");
  } catch (error) {
    res.json(error.message);
  }
};

const getCartItems = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user's cartItems
    res.status(200).json(user.cartItems);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { addCartItem, getCartItems };
