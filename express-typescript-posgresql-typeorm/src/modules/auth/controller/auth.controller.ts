import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  sendCookiesResponse,
  hashedPassword,
  getSignJwtToken,
  matchPassword,
  getResetSignJwtToken,
  getResetVerifyJwtToken,
} from "../../../middlewares/auth.middleware";
import { asyncHandler } from "../../../middlewares/async.middleware";
import { sendEmail } from "../../../middlewares/sendMail.middleware";
import { UserEntity } from "../model/user.entity";
import { getDBConnection } from "../../../config/db";
import { UpdateUserDto } from "../model/dtos";

// @desc Register User
// @route POST /api/v1/auth/register
// @access Public
export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, username } = req.body;
    const connection = await getDBConnection();

    const userRepository = connection.getRepository(UserEntity);

    const findUser = await userRepository.findOne({
      where: { username },
    });

    if (findUser) {
      throw new Error("User already registered");
    }

    const hashPassword = await hashedPassword(password);

    const createUser = await userRepository.create({
      ...req.body,
      password: hashPassword,
    });

    if (!createUser) {
      throw new Error("User Create not successful");
    }

    const user = await userRepository.save(createUser);

    const token = getSignJwtToken(user);
    const cookies = sendCookiesResponse(token, res);

    if (!cookies) {
      throw new Error("Token not set in cookies");
    }

    return res.status(200).json({
      success: true,
      msg: "Create a new Register",
      data: user,
      accessToken: token,
    });
  }
);

// @desc Get Users
// @route GET /api/v1/auth/users
// @access Public
export const getUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const connection = await getDBConnection();

    const userRepository = connection.getRepository(UserEntity);

    const results = await userRepository.find({
      relations: {
        products: true,
      },
    }); // populate is relation array data

    return res.status(200).json({
      success: true,
      msg: "Get all users",
      data: results,
    });
  }
);

// // @desc Get a single user
// // @route GET /api/v1/auth/users/:id
// // @access Private
export const getUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const connection = await getDBConnection();

    const userRepository = connection.getRepository(UserEntity);

    const user = await userRepository.findOne({ where: { id: req.params.id } });

    if (!user) {
      throw new Error("User is not found");
    }

    return res.status(200).json({
      success: true,
      msg: "Get a user",
      data: user,
    });
  }
);

// // @desc Login User
// // @route POST /api/v1/auth/login
// // @access Public
export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const connection = await getDBConnection();

    const userRepository = connection.getRepository(UserEntity);

    const oldUser = await userRepository.findOne({ where: { username } });

    if (!oldUser) {
      throw new Error(`Username ${username} not found`);
    }

    const isMatch = await matchPassword(password, oldUser);

    if (!isMatch) {
      throw new Error("Authorization is not Valid!");
    }
    const token = getSignJwtToken(oldUser);
    const cookies = sendCookiesResponse(token, res);

    if (!cookies) {
      throw new Error("Token not set in cookies");
    }

    return res.status(200).json({
      success: true,
      msg: "Login Successful",
      data: oldUser,
      accessToken: token,
    });
  }
);

// // @desc Logout User
// // @route GET /api/v1/auth/logout
// // @access Private
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

// // @desc Get me
// // @route GET /api/v1/auth/me
// // @access Private
export const getMe = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const connection = await getDBConnection();

    const userRepository = connection.getRepository(UserEntity);

    const user = await userRepository.findOne({ where: { id: req.id } });

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

// // @desc Forget password
// // @route POST /api/v1/auth/forgot-password
// // @access Private
export const forgotPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const token = uuidv4();

    const connection = await getDBConnection();
    const userRepository = connection.getRepository(UserEntity);
    const findMail = await userRepository.findOne({ where: { email } });

    if (!findMail) {
      throw new Error("User with this email does not exist");
    }

    const resetToken = getResetSignJwtToken(findMail.email);

    if (!resetToken) {
      throw new Error("Reset token not Generated");
    }

    const updateData = await userRepository.merge(findMail, {
      ...req.body,
      resetToken: resetToken,
    });

    await userRepository.save(updateData);

    const resetUrl = `${req.protocol}://${req.hostname}/reset-password/${resetToken}`;

    let mailOptions = {
      to: findMail.email,
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

// // @desc Reset password
// // @route POST /api/v1/auth/reset-password/:token
// // @access Private
export const resetPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    const { token } = req.params;
    const connection = await getDBConnection();
    const userRepository = connection.getRepository(UserEntity);

    if (token) {
      getResetVerifyJwtToken(token, res);
    }

    const newPassword = await hashedPassword(password);
    const user = await userRepository.findOne({
      where: { resetToken: token },
    });

    if (!user) {
      throw new Error("Invalid or expired reset token");
    }

    const updateData = await userRepository.merge(user, {
      password: newPassword,
      resetToken: null,
    });

    await userRepository.save(updateData);

    return res.status(200).json({
      success: true,
      msg: "Reset password",
      data: {},
    });
  }
);

// // @desc Update password
// // @route PUT /api/v1/auth/update-password
// // @access Private
export const updatePassword = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const { newPassword, currentPassword } = req.body;

    const connection = await getDBConnection();
    const userRepository = connection.getRepository(UserEntity);

    const user = await userRepository.findOne({ where: { id: req.id } });

    if (!user) {
      throw new Error("User not found");
    }

    if (!newPassword || !(await matchPassword(currentPassword, user))) {
      throw new Error("Current password is incorrect");
    }

    const password = await hashedPassword(newPassword);

    const updateData = await userRepository.merge(user, {
      password: password,
    });

    await userRepository.save(updateData);

    return res.status(200).json({
      success: true,
      msg: "Update password",
      data: updateData,
    });
  }
);

// // @desc Update a single user
// // @route PUT /api/v1/auth/users/:id
// // @access Public
export const updateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const connection = await getDBConnection();

    const { id } = req.params;

    const userRepository = await connection.getRepository(UserEntity);

    const user = await userRepository.findOneBy({ id });

    if (!user) {
      throw new Error("User is not found");
    }
    const updateData = await userRepository.merge(
      user,
      req.body as UpdateUserDto
    );

    await userRepository.save(updateData);

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
    const connection = await getDBConnection();
    const { id } = req.params;

    const userRepository = await connection.getRepository(UserEntity);

    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error(`Resource not found of id #${req.params.id}`);
    }
    await userRepository.delete({ id });

    return res.status(200).json({
      success: true,
      msg: `Delete a user of id ${req.params.id}`,
      data: user,
    });
  }
);
