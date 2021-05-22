import mongoose from "mongoose";
import { IDream } from "../interfaces/IDream";

const DreamSchema = new mongoose.Schema({
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

    solded : {
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
