import "reflect-metadata";
import { DataSource } from "typeorm";
import { UsersEntity } from "@/models/users/user.entity";
import { FileEntity } from "@/models/file/file.entity";
import { evnFileValidationSchema } from "../../validation/fileValidation";
import { ProductEntity } from "@/models/products/product.entity";
import { ProductVariantEntity } from "@/models/product-variant/product-variant.entity";
import { AddressEntity } from "@/models/address/address.entity";
import { DiscountEntity } from "@/models/discount/discount.entity";
import { CategoriesEntity } from "@/models/categories/categories.entity";
import { WishListEntity } from "@/models/wishlist/wishlist.entity";
import { BrandEntity } from "@/models/brand/brand.entity";
import { OrderEntity } from "@/models/order/order.entity";
import { OrderItemEntity } from "@/models/order-item/order-item.entity";

const inEnvFile = {
  DB_TYPE: process.env.DB_TYPE,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
};

const { data: envFile }: any = evnFileValidationSchema.safeParse(inEnvFile);

const dbConnection = new DataSource({
  type: envFile.DB_TYPE,
  host: envFile.DB_HOST,
  port: Number(envFile.DB_PORT),
  username: envFile.DB_USERNAME,
  password: envFile.DB_PASSWORD,
  database: envFile.DB_DATABASE,

  // type: "postgres",
  // host: process.env.DB_HOST,
  // port: Number(process.env.DB_PORT),
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [
    UsersEntity,
    FileEntity,
    ProductEntity,
    ProductVariantEntity,
    AddressEntity,
    DiscountEntity,
    CategoriesEntity,
    WishListEntity,
    BrandEntity,
    OrderEntity,
    OrderItemEntity,
  ],
  subscribers: [],
  migrations: [],
});

export const getDBConnection = async (): Promise<any> => {
  if (!dbConnection.isInitialized) {
    await dbConnection
      .initialize()
      .then(() => {
        console.log("database connection successfully");
      })
      .catch((error) => {
        console.log("🚀 ~ error:", error);
        console.log("Database connection error");
      });
  }
  return dbConnection;
};
