import express from "express";
import { createProduct, deleteProduct } from "../controllers/admin.controller.js";
import { getAllProducts, getProduct } from "../controllers/product.controller.js";
import { createCommentForProduct } from "../controllers/comment.controller.js";

const router = express.Router();

router
.get('/', getAllProducts)
.get('/:productId', getProduct)
.post('/:productId/comments', createCommentForProduct)
.delete('/:id', deleteProduct)
.post('/add-product', createProduct)




export default router;