import jwt, { decode } from 'jsonwebtoken';
import { User } from '../models/user.model.js';


export const protectRoute = async (req, res, next) => {
    try {

        const token = res.cookies['jwt'];
        if(!token ) {
            return res.status(400).json({success: false , message: "Unauthorized - No Token Provided"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) {
            return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
        };

        const user = await User.findById(decoded.userId).select('-password');
        if(!user) {
            return res.status(400).json({success:false, message: 'user not found'})
        }

        req.user = user;

        next();
        
    }catch(err) {
        console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}