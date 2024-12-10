import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";


import authRoutes from './Router/auth.route.js';
import productRoutes from './Router/product.route.js';
import categoryRoutes from './Router/categoty.route.js';
import cartRoutes from './Router/cart.route.js'
import { connectDB } from "./lib/db.js";

const app = express();
dotenv.config();


app.use(express.json());
app.use(cookieParser());


// Port
const port = process.env.PORT || 5000;



//Root Routs
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/cart', cartRoutes);







app.listen(port , () => {
    console.log('app running on port 3000');
    
    //connect DB
    connectDB();
})