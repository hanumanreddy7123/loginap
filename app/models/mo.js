const mongoose = require("mongoose")
var stdschema=mongoose.Schema
({
    name:String,
    age:Number
})
var smd=mongoose.model('std',stdschema)
module.exports=smd