import { Router } from "express";
import authController from "../controller/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

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
 * @route GET /api/auth/logout
 * @description Logs out the current user.
 * @access Public
 */
authRouter.get("/logout", authController.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @description Retrieves the details of the current user.
 * @access Public
 */
authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController);

export default authRouter;
