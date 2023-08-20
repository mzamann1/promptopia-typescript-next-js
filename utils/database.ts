import mongoose from "mongoose";

let isCOnnected = false;

export const connectToDB = async () => {
  const connectionString: string = process.env.MONGODB_URI as string;
  mongoose.set("strictQuery", true);

  if (isCOnnected) {
    console.log("MongoDB is already connect");
    return;
  }

  try {
    await mongoose.connect(connectionString, {
      dbName: "sharePrompt",
    });

    isCOnnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
