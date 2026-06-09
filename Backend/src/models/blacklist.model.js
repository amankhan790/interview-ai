import mongoose from "mongoose";

const tokenBlacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "token is required to balcklist..."],
    },
  },
  {
    timestamps: true,
  },
);

const blacklistModel = mongoose.model("blacklisttoken", tokenBlacklistSchema);

export default blacklistModel;
