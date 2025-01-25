import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // const MONGODB_URI =
  //   process.env.NODE_ENV == "development"
  //     ? "mongodb://localhost/readyup-dev"
  //     : process.env.MONGODB_URI;

  const MONGODB_URI = process.env.MONGODB_URI;

  console.log("Connecting to MONGODB_URI: ", MONGODB_URI);

  try {
    await mongoose.connect(MONGODB_URI);

    isConnected = true;
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB: ", err);
  }
};
