import mongoose from "mongoose";
import { ITest } from "../interfaces/ITest";

const TestSchema = new mongoose.Schema({

    name : {
        type : String,
        unique : true,
    }
  
});
    
export default mongoose.model<ITest & mongoose.Document>("Test", TestSchema);