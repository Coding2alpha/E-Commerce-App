const express = require("express");
const Product = require("../models/product");
const { StatusCodes } = require("http-status-codes");

const addProduct = async (req, res) => {
  // console.log(req.body)
  try {
    // req.body.createdBy = req.user.userId;
    // console.log(req.body);
    const product = await Product.create(req.body);
    // console.log(product);
    res.status(StatusCodes.CREATED).json({ msg: "successful" });
  } catch (error) {
    res.send({ msg: "unsuccessfull" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    // console.log(products);
    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    res.send({ msg: "getAllProduct Failed" });
  }
};

module.exports = { addProduct, getAllProducts };
