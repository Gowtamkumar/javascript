import express, { Router } from "express";
import {
  register,
  login,
  getUsers,
  getMe,
  getUser,
  updateUser,
  deleteUser,
  logout,
  forgotPassword,
  resetPassword,
  updatePassword,
} from "../controller/auth.controller";
import { AuthGuard, isAuthorize } from "../../../middlewares/auth.middleware";

const router: Router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(AuthGuard, getMe);
router.route("/update-password").put(AuthGuard, updatePassword);
router.route("/forgot-password").post(AuthGuard, forgotPassword);
router.route("/reset-password/:token").post(AuthGuard, resetPassword);
router.route("/users").get(AuthGuard, isAuthorize, getUsers);
router
  .route("/users/:id")
  .get(AuthGuard, getUser)
  .put(AuthGuard, updateUser)
  .delete(AuthGuard, deleteUser);

router.route("/logout").delete(AuthGuard, logout);

export default router;
