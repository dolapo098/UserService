import express, { Router } from "express";
import dotenv from "dotenv";
import { httpRequestCallBack } from "../_express_callback/httpCallback";

import { userController } from "../controllers";

export const router: Router = express.Router();

// The authentication route which binds the user controller
router.post(
  "/create_user",
  httpRequestCallBack(userController.createUser.bind(userController))
); // public route

router.get("/test", function (req, res) {
  res.send("GET request to homepage");
});
