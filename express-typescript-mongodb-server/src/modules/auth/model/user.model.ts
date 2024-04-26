import { Schema, Document, model } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import envConfig from "../../../config/config";

// Define the interface for the User document
interface User extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  resetToken?: string;
  resetTokenExpire?: Date;
  role: "Admin" | "Employee";
  status: boolean;
}

// Define the schema for the User document
const userSchema: Schema<User> = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Please enter your username"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  resetToken: String,
  resetTokenExpire: Date,
  role: {
    type: String,
    required: [true, "Please add a role"],
    enum: ["Admin", "Employee"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

// Encrypt password using bcrypt
userSchema.pre<User>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Generate JWT token
userSchema.methods.getSignJwtToken = function (this: User): string {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      username: this.username,
      role: this.role,
      status: this.status,
    },
    envConfig.JWT_SECRET,
    {
      expiresIn: envConfig.JWT_EXPIRES,
    }
  );
};

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (
  this: User,
  enteredPassword: string
): Promise<boolean> {
  return bcrypt.compare(enteredPassword, this.password);
};

// Define and export the User model
const UserModel = model<User>("users", userSchema);
export default UserModel;
