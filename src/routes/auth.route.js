import { Router } from "express";
import authController from "../controller/auth.controller.js";

const authRouter = Router();

/**
 * Adds two numbers together.
    * @route POST /api/auth/register
    * @description Registers a new user with the provided details.
    * @access Public
 */

authRouter.post("/register", authController.registerUserController);


/**
 * Adds two numbers together.
    * @route POST /api/auth/login
    * @description Logs in an existing user with the provided credentials.
    * @access Public
 */
authRouter.post("/login", authController.loginUserController);



export default authRouter;
