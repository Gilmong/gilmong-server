import mongoose from "mongoose";
import { IDream } from "../interfaces/IDream";

const DreamSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },

    image : {
        type : String,
        required : true,
    },

    content : {
        type : String,
        required : true,
    },

    keyword : [{
        type : String,
        required : true,
    }],

    dreamer : {
        type : mongoose.Types.ObjectId,
        ref : "User",
    },

    owner : {
        type: mongoose.Types.ObjectId,
        ref : "User",
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

    solded: {
        type : Boolean,
        required : true,
    },

    auctioning : {
        type : Boolean,
        required : true,
    }

  });
  
export default mongoose.model<IDream & mongoose.Document>(
  "Dream",
  DreamSchema
);
