import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const Dream = {
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

  solded : {
    type : Boolean,
    required : true,
  },

  auctioning : {
    type : Boolean,
    required : true,
  }
}

const UserSchema = new mongoose.Schema({

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
  date: {
    type: Date,
    default: Date.now,
  },
  boughtDream : [{
    type : Dream,
    required : false,
  }],
  soldDream : [{
    type : Dream,
    required : false,
  }],
  coin : {
    type : Number,
    required : true,
  }
  
});

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);
