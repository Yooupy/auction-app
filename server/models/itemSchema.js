import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  description: String,
  imageUrl: String,
  startingBid: Number,
  currentBid: Number,
  bids: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      bidAmount: Number,
      bidTime: Date,
    },
  ],
  categories: {
    type: [String],
    enum: ["Art", "Books", "Electronics", "Fashion", "Home", "Antiques"],
  },
  status: {
    type: Boolean,
    default: true, // default status is open
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Item", itemSchema);
