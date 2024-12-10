import mongoose, { mongo } from "mongoose";

const cartSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    items : [
        {
            product : { type : mongoose.Schema.Types.ObjectId, ref : 'Product'},
            quantity : { type : Number, required : true}
        }
    ],

});


export const Cart = mongoose.model('Cart', cartSchema);