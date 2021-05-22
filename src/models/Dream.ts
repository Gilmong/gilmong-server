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
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
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

     sold: {
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
