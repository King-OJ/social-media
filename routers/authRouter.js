import { Router } from 'express';
import {  loginUser, logoutUser, registerUser } from '../controllers/authController.js';
import { validateLoginRequest, validateRegisterRequest } from '../middlewares/validationMiddleware.js';

const router = Router();

router.route("/register").post( validateRegisterRequest , registerUser)
router.route("/login").post( validateLoginRequest , loginUser)
router.route("/logout").get(logoutUser)

export default router