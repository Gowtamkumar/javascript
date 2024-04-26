import { NextFunction, Request, Response } from "express";

// logger
export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

// module.exports = logger;
