import mongoose from "mongoose";
import { IDream } from "../interfaces/IDream";

const DreamSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        default : "꿈에서는 잘 안됐어요 :0",
    },

    image : {
        type : String,
        default : "data:image/png;base64,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",
        required : true,
    },

    content : {
        type : String,
        required : true,
        default : "꿈속에서는 안됐으니 현실에서는 잘되겠쬬?",
    },

    keyword : [{
        type : String,
        required : true,
        default : "힘내자.",
    }],

    dreamer : {
        type : mongoose.Types.ObjectId,
        ref : "User",
        default : "60a964a1113a9a3e51bebae5"
    },

    owner : {
        type: mongoose.Types.ObjectId,
        ref : "User",
        default : "60a964a1113a9a3e51bebae5"
    },

    price : {
        type : Number,
        required : true,
        default : 0,
    },

    date : {
        type : Date,
        required : true,
        default : Date.now,
    },

    solded: {
        type : Boolean,
        default : false,
        required : true,
    },

    auctioning : {
        type : Boolean,
        default : true,
        required : true,
    }

  });
  
export default mongoose.model<IDream & mongoose.Document>(
  "Dream",
  DreamSchema
);
