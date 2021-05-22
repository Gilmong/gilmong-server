import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

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

    title : {
      type : String,
      required : true,
    },
    content : {
      type : String,
      required : true,
    },
    
  }],
  soldDream : [{

    title : {
      type : String,
      required : true,
    },
    content : {
      type : String,
      required : true,
    },

  }],
  coin : {
    type : Number,
    required : true,
  }
  
});

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);
