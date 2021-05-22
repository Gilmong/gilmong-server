import mongoose from "mongoose";
import { IComment } from "../interfaces/IComment";

const CommentSchema = new mongoose.Schema({

  writer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },

  biddingPrice: {
    type: Number,
  },

  content: {
    type: String,
  },

});
  
export default mongoose.model<IComment & mongoose.Document>("Comment", CommentSchema);