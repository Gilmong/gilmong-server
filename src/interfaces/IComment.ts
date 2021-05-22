import mongoose from "mongoose";
import { IUser } from "./IUser";

export interface IComment {
  writer: IUser;
  biddingPrice: number;
  content: string;
}
