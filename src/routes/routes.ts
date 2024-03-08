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

router.get(
  "/get_all_users",
  httpRequestCallBack(userController.findAllUsers.bind(userController))
);

router.get(
  "/get_user_by_id/:id",
  httpRequestCallBack(userController.findOneUserById.bind(userController))
);

router.get(
  "/get_user_by_email/:email",
  httpRequestCallBack(userController.findOneUserByEmail.bind(userController))
);

router.get(
  "/get_user_by_email_password",
  httpRequestCallBack(
    userController.findOneUserByEmailPassword.bind(userController)
  )
);
