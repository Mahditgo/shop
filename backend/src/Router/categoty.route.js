import express from "express";
import { createCategory, deleteCategory } from "../controllers/admin.controller.js";
import { categoryProducts, getAllCategories, getCategory } from "../controllers/category.controller.js";


const router = express.Router();

router
.post('/cerate-category', createCategory)
.get('/', getAllCategories)
.get('/:id', getCategory)
.get('/:id/products', categoryProducts)
.delete('/:id', deleteCategory)

export default router;