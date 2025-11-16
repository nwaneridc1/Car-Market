const mongoose= require ('mongoose');
const { Schema } = mongoose;
const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    originalprice:{
        type:Number,
    },
    image:{
        type:Array,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    subCategory:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    color:{
        type:[String],
        required:true,
    },
    bestseller:{
        type:Boolean,
    },
    date:{
        type:Number,
        required:true,
    },
},
{
    timestamps:true, 
});

const productModel = mongoose.models.product || mongoose.model("product",ProductSchema)
module.exports = productModel