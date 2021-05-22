import mongoose from "mongoose";
import { IAuction } from "../interfaces/IAuction";

const AuctionSchema = new mongoose.Schema({
    dream: {
        image : {
            type : String,
            required : true,
        },
      
        content : {
            type : String,
            required : true,
        },
      
        keyword : {
            type : String,
            required : true,
        },
      
        dreamer : {
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
      
        owner : {
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
      
          price : {
            type : Number,
            required : true,
        },
      
          date : {
            type : Date,
            required : true,
            default : Date.now,
        },
      
          sold : {
            type : Boolean,
            required : true,
        },
      
          auctioning : {
            type : Boolean,
            required : true,
        }
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
