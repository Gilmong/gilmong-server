import mongoose from "mongoose";
import { IDream } from "./IDream";

export interface IUser {
  name: string;
  email: string;
  password: string;
  date: Date;
  boughtDream : [ IDream ];
  soldDream : [ IDream ];
  coin : number;
}

export interface IUserInputDTO {
  name: string;
  email: string;
  password: string;
}
