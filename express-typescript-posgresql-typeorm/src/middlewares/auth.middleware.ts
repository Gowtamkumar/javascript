import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../config/config";
import { CreateUserDto } from "../modules/auth/model/dtos";

// Define the type for the middleware function
type MiddlewareFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

// Define the type for the token payload
interface TokenPayload {
  name: string;
  username: string;
  _id: string;
  role: string;
}

// AuthGuard middleware
const AuthGuard: MiddlewareFunction = (req: any, res, next) => {
  const { authorization } = req.headers;
  let token = authorization?.split(" ")[1] || req.cookies.accessToken;

  if (!token) {
    return next({ message: "Authentication Failed" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
    const { name, username, _id, role } = decoded;
    req.name = name;
    req.username = username;
    req.role = role;
    req._id = _id;
    next();
  } catch (err) {
    next({ message: "Authentication Failed" });
  }
};

// isAuthorize middleware
const isAuthorize: MiddlewareFunction = async (req: any, res, next) => {
  try {
    if (req.role === "Admin") {
      return next();
    } else {
      return next({ statusCode: 401, message: "Authorize Failed!" });
    }
  } catch (err) {
    return next({ statusCode: 401, message: "Authorize Failed!" });
  }
};

// Function to send cookies response

const sendCookiesResponse = (token: string, res: Response) => {
  let options = {
    maxAge: 20 * 60 * 1000, // would expire in 20 minutes
    httpOnly: true, // The cookie is only accessible by the web server
    secure: false, // Set to true if you're using HTTPS
  };

  // Set the cookie
  return res.cookie(process.env.COOKIE_NAME!, token, options);

  // Optionally, you can also send a response back
  // res.status(200).json({ success: true, token });
};

// Function to generate signed JWT token
const getSignJwtToken = (user: any): string => {
  return jwt.sign(
    { id: user.id, name: user.name, username: user.username },
    config.JWT_SECRET!,
    {
      expiresIn: config.JWT_EXPIRES,
    }
  );
};

const getResetSignJwtToken = (email: string) => {
  return jwt.sign({ user: email }, config.RESET_SECRET!, {
    expiresIn: config.REST_EXPIRESIN,
  });
};

const getResetVerifyJwtToken = (token: string, res: any) => {
  try {
    jwt.verify(token, config.RESET_SECRET!, (error: any, decodedToken: any) => {
      if (error) {
        throw new Error("Invalid or expired reset token new");
      }
    });
  } catch (error) {
    throw new Error("Invalid or expired reset token try catch");
  }
};

// Function to hash password
const hashedPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

// Function to compare passwords
const matchPassword = async (
  enterPassword: string,
  user: any
): Promise<boolean> => {
  return bcrypt.compare(enterPassword, user.password);
};

export {
  AuthGuard,
  isAuthorize,
  sendCookiesResponse,
  hashedPassword,
  getSignJwtToken,
  matchPassword,
  getResetSignJwtToken,
  getResetVerifyJwtToken,
};
