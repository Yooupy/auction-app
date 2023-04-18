import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 10000, // Default balance of 10,000
  },
  fakeMoney: {
    type: Number,
    default: 10000, // Default fake money of 10,000
  },
  items: {
    posted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
    bought: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },
  actions: [
    {
      type: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export default mongoose.model("User", userSchema);
