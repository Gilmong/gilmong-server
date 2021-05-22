import mongoose from "mongoose";
import { IAuction } from "../interfaces/IAuction";

const AuctionSchema = new mongoose.Schema({

    dream: {
      title : {
        type : String,
        required : true,
      },
      content : {
        type : String,
        required : true,
        
      },
      owner: {
        name: {
            type: String,
            required: true,
        },
          email: {
            type: String,
            required: true,
            unique: true,
        }
      },
    },

    initialPrice: {
        type: Number,
    },

    currentPrice: {
        type: Number,
    },

    comment: [{
        writer: {
          name: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
          }
        },

        biddingPrice: {
            type: Number,
        },

        content: {
            type: String,
        },

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
