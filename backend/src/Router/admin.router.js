import express from "express";
import { deleteUser, getAllUsers, getUser } from "../controllers/admin.controller.js";


const router = express.Router();

router
.get('/', getAllUsers)
.get('/:id', getUser)
.delete('/:id', deleteUser)


export default router;