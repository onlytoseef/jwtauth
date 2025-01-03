import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log("DB Conencted ");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
