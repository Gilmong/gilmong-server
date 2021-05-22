import mongoose from "mongoose";
import { IUser } from "./IUser";

export interface IDream {
    image : string;
    content : string;
    keyword : string;
    dreamer : IUser;
    owner : IUser;
    price : number;
    date : Date;
    solded : boolean;
    auctioning : boolean;
}

export interface IDreamInputDTO {
    image : string;
    content : string;
    keyword : string;
    dreamer : IUser;
    owner : IUser;
    price : number;
    date : Date;
    solded : boolean;
    auctioning : boolean;
}
