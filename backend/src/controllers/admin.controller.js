import { Category } from "../models/category.model.js";
import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
    const { name, description, price, category, instock } = req.body;

    const product = await Product.create({
        name,
        description,
        price,
        category,
        instock
    })

    res.status(201).json(product)
}


//delete image should add after handle with cloudinary
export const deleteProduct = async (req , res) => {
    const { id } = req.params;

    try {

        const product = await Product.findByIdAndDelete(id);
        if(!product)  {
            return res.status(404).json({success : false , message : 'product not found'});
        };

        res.status(200).json({success: true, message: 'product deleted successfully'})

    }catch(err) {


    }
};


//category part
export const createCategory = async(req, res) => {
    const { name, description } = req.body;

    try {

        const category = await Category.create({ name , description });

        res.status(201).json({
            status: 'success',
            data: category,
          });

    }catch(err) {

    }
}

export const deleteCategory = async(req, res) => {
    
    const { id } = req.params;

    const category = await Category.findByIdAndDelete(id);
    if(!category) {
        return res.status(404).json('category not founded')
    }

    res.status(200).json({success: true, data : null})
}