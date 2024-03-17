const express=require('express')
const router=express.Router()
const addProduct=require('../controllers/product')

router.route('/addProduct').post(addProduct)

module.exports=router