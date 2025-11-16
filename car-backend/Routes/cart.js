const express = require ("express")
const {addToCart, getUserCart, updateCart} = require ('../Controller/cart')
const authUser = require("../Middleware/auth")

const cartRouter = express.Router()

cartRouter.post('/get', authUser ,getUserCart)
cartRouter.post('/add', authUser , addToCart)
cartRouter.post('/update',authUser ,updateCart)

module.exports = cartRouter