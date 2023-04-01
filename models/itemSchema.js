import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  description: String,
  imgUrl: String,
  startingBid: Number,
  currentBid: Number,
  bids: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      bidAmount: Number,
      bidTime: Date,
    },
  ],
});

export default mongoose.model("Item", itemSchema);
