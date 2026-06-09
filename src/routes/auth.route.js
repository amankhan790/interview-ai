import { Router } from "express";
import authController from "../controller/auth.controller.js";

const authRouter = Router();

/**
    * @route POST /api/auth/register
    * @description Registers a new user with the provided details.
    * @access Public
 */

authRouter.post("/register", authController.registerUserController);


/**
    * @route POST /api/auth/login
    * @description Logs in an existing user with the provided credentials.
    * @access Public
 */
authRouter.post("/login", authController.loginUserController);


/**
* @route POST /api/auth/logout
* @description Logs out the current user.
* @access Public
*/
authRouter.get("/logout", authController.logoutUserController);


export default authRouter;
