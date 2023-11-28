import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    const DB = process.env.DATABASE!;

    //connect to MongoDB
    await mongoose.connect(DB);
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};
