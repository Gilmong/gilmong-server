import mongoose from "mongoose";

export interface IDream {
    title : string;
    image : string;
    content : string;
    keyword : [string];
    dreamer : mongoose.Types.ObjectId;
    owner : mongoose.Types.ObjectId;
    price : number;
    date : Date;
    solded : boolean;
    auctioning : boolean;
}

export interface IDreamInputDTO {
    title : string;
    image : string;
    content : string;
    keyword : [string];
    price : number;
}
