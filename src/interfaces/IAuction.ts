import mongoose from "mongoose";
import { IUser } from "./IUser";
import { IDream } from "./IDream";
import { IComment } from "./IComment";

export interface IAuction {
    dream : IDream,
    owner : IUser,
    initialPrice : Number,
    currentPrice : Number,
    comment : [IComment],
    enrollDate : Date,
	dueDate : Date,
    participant : Number,
}
