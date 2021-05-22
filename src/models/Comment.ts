import mongoose from "mongoose";
import { IComment } from "../interfaces/IComment";

const CommentSchema = new mongoose.Schema({
    writer: {
        name: {
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
          avatar: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
    },
    biddingPrice: {
        type: Number,
    },
    content: {
        type: String,
    },
  });
  
  export default mongoose.model<IComment & mongoose.Document>("Comment", CommentSchema);