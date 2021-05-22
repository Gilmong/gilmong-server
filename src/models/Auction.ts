import mongoose from "mongoose";
import { IAuction } from "../interfaces/IAuction";

const AuctionSchema = new mongoose.Schema({

    dream: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Dream",
    },

    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },

    initialPrice: {
        type: Number,
    },

    currentPrice: {
        type: Number,
    },

    comment: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comment",
    }],

    enrollDate: {
        type: Date,
    },

    dueDate: {
        type:  Date,
    },
    
    participant: {
        type: Number,
    },

});

export default mongoose.model<IAuction & mongoose.Document>("Auction", AuctionSchema);
