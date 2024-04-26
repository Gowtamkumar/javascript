import mongoose, { ConnectOptions } from "mongoose";

const connectdb = async (): Promise<void> => {
  try {
    // const options: ConnectOptions = {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true
    //   // Add any additional options you need
    // };

    await mongoose.connect("mongodb://localhost:27017/practice_mongodb");
    console.log("Database connection successfully");
  } catch (error: any) {
    console.error(error.message);
  }
};

export { connectdb };
