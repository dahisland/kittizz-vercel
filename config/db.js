import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB is connected");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

export default connectDB;
