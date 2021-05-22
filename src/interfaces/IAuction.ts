import mongoose from "mongoose";

export interface IAuction {
    dream : mongoose.Types.ObjectId,
    owner : mongoose.Types.ObjectId,
    initialPrice : Number,
    currentPrice : Number,
    comment : [ mongoose.Types.ObjectId ],
    enrollDate : Date,
	dueDate : Date,
    participant : Number,
}
