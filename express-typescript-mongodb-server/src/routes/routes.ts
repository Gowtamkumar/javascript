import { Express, Request, Response, NextFunction } from "express";
import bootcampRoutes from "../modules/bootcamp/route/bootcamp.route";
import authRoutes from "../modules/auth/route/auth.route";
import productRoutes from "../modules/product/route/product.route";
import { AuthGuard } from "../middlewares/auth.middleware";

// Define the type for the Express application
type ExpressApp = Express;

// Define the type for the middleware function
type MiddlewareFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

// Export the routes setup function
export const setupRoutes = (app: ExpressApp): void => {
  app.use("/api/v1/bootcamp", bootcampRoutes);
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/products", AuthGuard as MiddlewareFunction, productRoutes);
};
