import express from "express";
import { login, logout, signup, updatePassword } from "../controllers/auth.controller.js";

const router = express.Router();

router
.post('/signup', signup)
.post('/login', login)
.post('/logout', logout)
// .post('/forgot-password', forgotPassword)
.put('/update-passwrod', updatePassword)

export default router;