import express from "express";
import {
    getErga,
    createErga,
} from "../controllers/Erga.js"
import { verifyUser,adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/customer',verifyUser,adminOnly, getErga);
//router.get('/users/:id',verifyUser,adminOnly,getUserById);
router.post('/customer',verifyUser,adminOnly,createErga);
// router.patch('/users/:id',verifyUser,adminOnly,updateUser);
// router.delete('/users/:id',verifyUser,adminOnly,deleteUser);


export default router;