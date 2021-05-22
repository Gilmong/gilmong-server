import mongoose from "mongoose";
import { IUser } from "./IUser";
import { IDream } from "./IDream";

export interface IAuction {
    dream : IDream,
    owner : IUser,
    initialPrice : Number,
    currentPrice : Number,
    comment : [Comment],
    enrollDate : Date,
	dueDate : Date,
    participant : Number,
}
