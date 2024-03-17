const express = require("express");
const Product = require("../models/product");

const addProduct = async (req, res) => {
  // console.log(req.body)
  try {
    // req.body.createdBy = req.user.userId;
    // console.log(req.body);
    const product = await Product.create(req.body);
    console.log(product);
    res.send({ msg: "successful" });
  } catch (error) {
    res.send({msg:'unsuccessfull'})
  }
};

module.exports = addProduct;
