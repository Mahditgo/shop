import express from "express";
import { createOrder, getAllOrdersByUser } from "../controllers/order.controller.js";



const router = express.Router();

router
.post('/add-order', createOrder)
.get('/:userId', getAllOrdersByUser)


export default router;