import mongoose from "mongoose";

// Level must be unique (only one avatar by level)
const kittySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    slogan: { type: String, required: [true, "slogan is required"] },
    details: { type: String, required: [true, "details is required"] },
    author: { type: String, required: [true, "author is required"] },
    img: {
      type: String,
      default: "https://i.ibb.co/hX6qhWs/tirelire03.jpg",
    },
    goal: { type: Number, required: [true, "goal is required"] },
    amount: { type: [Number] },
    likers: { type: [String] },
  },
  { timestamps: true }
);

const Kitty = mongoose.model("Kitty", kittySchema);

export default Kitty;
