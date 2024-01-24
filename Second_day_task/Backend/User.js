const mongoose = require('mongoose')
 
const UserSchema = new mongoose.Schema({
    prod_Name: String,
    prod_id: Number,
    prod_price: Number,
    prod_desc: String
})
 
const UserModel = mongoose.model("users", UserSchema)
 
module.exports = UserModel;