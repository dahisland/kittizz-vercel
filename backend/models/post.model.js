import mongoose from "mongoose";

// Level must be unique (only one avatar by level)
const kittySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: { type: String, required: [true, "description is required"] },
    author: { type: String, required: [true, "author is required"] },
    img: {
      type: String,
      default: "https://i.ibb.co/hX6qhWs/tirelire03.jpg",
    },
    goal: { type: Number, required: [true, "goal is required"] },
    amount: { type: Number, default: 0 },
    likers: { type: [String] },
  },
  { timestamps: true }
);

const Kitty = mongoose.model("Kitty", kittySchema);

export default Kitty;
