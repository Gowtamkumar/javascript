import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  sendCookiesResponse,
  hashedPassword,
} from "../../../middlewares/auth.middleware";
import User from "../model/user.model";
import { asyncHandler } from "../../../middlewares/async.middleware";
import { sendEmail } from "../../../middlewares/sendMail.middleware";

// @desc Register User
// @route POST /api/v1/auth/register
// @access Public
export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const findUser = await User.findOne({ username: req.body.username });

    if (findUser) {
      throw new Error("User already registered");
    }

    const newUser = (await User.create(req.body)) as any;
    if (!newUser) {
      throw new Error("User Create not successful");
    }

    const token = newUser.getSignJwtToken();
    const cookies = sendCookiesResponse(token, res);

    if (!cookies) {
      throw new Error("Token not set in cookies");
    }

    return res.status(200).json({
      success: true,
      msg: "Create a new Register",
      data: newUser,
      accessToken: token,
    });
  }
);

// @desc Get Users
// @route GET /api/v1/auth/users
// @access Public
export const getUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const results = await User.find(); // populate is relation array data

    return res.status(200).json({
      success: true,
      msg: "Get all users",
      data: results,
    });
  }
);

// @desc Get a single user
// @route GET /api/v1/auth/users/:id
// @access Private
export const getUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await User.findById(req.params.id).populate("products"); // populate is relation array data

    if (!result) {
      throw new Error("User is not found");
    }

    return res.status(200).json({
      success: true,
      msg: "Get a user",
      data: result,
    });
  }
);

// @desc Login User
// @route POST /api/v1/auth/login
// @access Public
export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const oldUser = (await User.findOne({ username })) as any;

    if (!oldUser) {
      throw new Error(`Username ${username} not found`);
    }

    const isMatch = await oldUser.matchPassword(password);

    if (!isMatch) {
      throw new Error("Authorization is not Valid!");
    }
    const token = oldUser.getSignJwtToken();

    sendCookiesResponse(token, res);

    return res.status(200).json({
      success: true,
      msg: "Login Successful",
      data: oldUser,
      accessToken: token,
    });
  }
);

// @desc Logout User
// @route GET /api/v1/auth/logout
// @access Private
export const logout = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    Object.entries(req.cookies).forEach(([key, value]) => res.clearCookie(key));

    return res.status(200).json({
      success: true,
      msg: "Logout Successful",
      data: null,
    });
  }
);

// @desc Get me
// @route GET /api/v1/auth/me
// @access Private
export const getMe = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const user = await User.findById(req._id);

    if (!user) {
      throw new Error("Authorization is not Valid!");
    }

    return res.status(200).json({
      success: true,
      msg: "Get Me Successful",
      data: user,
    });
  }
);

// @desc Forget password
// @route POST /api/v1/auth/forgot-password
// @access Private
export const forgotPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    console.log("🚀 ~  req.body;:", req.body);
    const token = uuidv4();
    const user = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          resetToken: token,
          resetTokenExpire: Date.now() + 3600000, // token expires after one hour
        },
      }
    );

    if (!user) {
      throw new Error("User with this email does not exist");
    }

    const resetUrl = `${req.protocol}://${req.hostname}/reset-password/${token}`;

    let mailOptions = {
      to: user.email,
      from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
      subject: "Password Reset",
      text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account. Please click on the following link, or paste it into your browser to complete the process within one hour of receiving it: ${resetUrl}`,
    };

    await sendEmail(mailOptions);

    return res.status(200).json({
      success: true,
      msg: "Forget password successful. Please check your email address",
      data: {},
    });
  }
);

// @desc Reset password
// @route POST /api/v1/auth/reset-password/:token
// @access Private
export const resetPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    const { token } = req.params;

    const newPassword = await hashedPassword(password);

    const user = await User.findOneAndUpdate(
      {
        resetToken: token,
        resetTokenExpire: { $gt: Date.now() },
      },
      {
        $set: {
          password: newPassword,
          resetToken: null,
          resetTokenExpire: null,
        },
      }
    );

    if (!user) {
      return res
        .status(400)
        .send({ message: "Invalid or expired reset token" });
    }

    return res.status(200).json({
      success: true,
      msg: "Reset password",
      data: {},
    });
  }
);

// @desc Update password
// @route PUT /api/v1/auth/update-password
// @access Private
export const updatePassword = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const { newPassword, currentPassword } = req.body;
    const user = (await User.findById(req._id).select("password")) as any;

    if (!user) {
      throw new Error("User not found");
    }

    if (!newPassword || !(await user.matchPassword(currentPassword))) {
      throw new Error("Current password is incorrect");
    }

    const password = await hashedPassword(newPassword);

    const newUser = await User.findOneAndUpdate(
      {
        _id: user._id,
      },
      {
        $set: { password },
      }
    );

    return res.status(200).json({
      success: true,
      msg: "Update password",
      data: newUser,
    });
  }
);

// @desc Update a single user
// @route PUT /api/v1/auth/users/:id
// @access Public
export const updateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const updateData = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      msg: `Update a User of id ${req.params.id}`,
      data: updateData,
    });
  }
);

// @desc Delete a single user
// @route DELETE /api/v1/auth/users/:id
// @access Public
export const deleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await User.findByIdAndDelete(req.params.id);

    if (!result) {
      throw new Error(`Resource not found of id #${req.params.id}`);
    }

    return res.status(200).json({
      success: true,
      msg: `Delete a user of id ${req.params.id}`,
      data: result,
    });
  }
);
