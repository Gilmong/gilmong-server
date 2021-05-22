import mongoose from "mongoose";
import { IDream } from "./IDream";

export interface IUser {
  
  name: string;
  email: string;
  password: string;
  date: Date;
  avatar : string;
  boughtDream : [mongoose.Types.ObjectId];
  soldDream : [mongoose.Types.ObjectId];
  coin : number;

}

export interface IUserInputDTO {
  name: string;
  email: string;
  password: string;
}
