
import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../modules/auth/model/user.entity";
import { ProductEntity } from "../modules/product/model/product.entity";

// DB_TYPE="postgres"
// DB_HOST=127.0.0.1
// DB_PORT=5432
// DB_USERNAME=postgres
// DB_PASSWORD='101'
// DB_DATABASE=express_ts_posgresq_typeorm

const dbConnection = new DataSource({
  type: "postgres",
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: '101',
  database: 'express_ts_posgresq_typeorm',
  synchronize: true,
  logging: false,
  entities: [UserEntity, ProductEntity],
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
      .catch((error: any) => {
        console.log("🚀 ~ error:", error)
        console.log("Database connection error");
      });
  }
  return dbConnection;
};
