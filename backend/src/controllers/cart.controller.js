import { Cart } from "../models/cart.mode.js";



export const addToCart = async (req, res) => {
    const { user , productId , quantity } = req.body;

    try {

        let cart = await Cart.findOne({ user });

        if (!cart) {
            cart = Cart.create({
                user,
                items : [{product : productId , quantity}]
            })
        } else {

            const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
            if(itemIndex > -1) {
                cart.items[itemIndex].quantity +=quantity;
            } else {
                cart.items.push({product : productId, quantity })
            }
        }

        await cart.save();

        res.status(200).json({
            status: 'success',
            data: cart,
          });

    }catch(err) {
        console.log(err.message);
        res.status(500).json({success : false, message : 'intenal server error'})
    }

}


export const productsInCart = async (req, res) => {
    const { userId } = req.params;
    
    try {
        const cart = await Cart.findOne({ user : userId }).populate('items.product');

        if (!cart) {
            return res.status(404).json({
              status: 'fail',
              message: 'Cart not found',
            });
          }
    
          res.status(200).json({
            status: 'success',
            data: cart,
          });
    }catch(err) {
        console.log(err.message);
        res.status(500).json({success : false, message : 'intenal server error'})
    }
};


export const deleteFromCart = async (req, res) => {
    const { userId, productId } = req.params;

    try {

        const cart = await Cart.findOne({user : userId })
        if (!cart) {
            return res.status(404).json({
              status: 'fail',
              message: 'Cart not found',
            });
          }

          cart.items = cart.items.filter((item) => item.product.toString() !== productId);
          await cart.save();

          res.status(200).json({
            status: 'success',
            data: cart,
          });

    }catch(err) {
        console.log(err.message);
        res.status(500).json({success : false, message : 'intenal server error'})
    }
}


export const deleteAllFromCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: userId });
    
        if (!cart) {
          return res.status(404).json({
            status: 'fail',
            message: 'Cart not found',
          });
        }
    
        cart.items = [];
        await cart.save();
    
        res.status(200).json({
          status: 'success',
          message: 'Cart cleared',
        });

      } catch (err) {
        console.log(err.message);
        res.status(500).json({success : false, message : 'intenal server error'})
      }
};


export const updateQuantity = async (req, res ) => {
    const { userId } = req.params;
    const {productId , quantity} = req.body;

    try {

        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
          return res.status(404).json({
            status: 'fail',
            message: 'Cart not found',
          });
        }

        const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId); 

        if(itemIndex > -1) {
            //update with new quantity user entered
            cart.items[itemIndex].quantity = quantity;
            
            if(quantity === 0) {
                cart.items.splice(itemIndex, 1);
            }
        }else {
            return res.status(404).json({
              status: 'fail',
              message: 'Product not found in cart',
            });
          }

          await cart.save();

            res.status(200).json({
            status: 'success',
            data: cart,
            });

    }catch(err) {
        console.log(err.message);
        res.status(500).json({success : false, message : 'intenal server error'})
    }
}