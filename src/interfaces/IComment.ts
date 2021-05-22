import mongoose from "mongoose";

export interface IComment {

  writer: mongoose.Types.ObjectId;
  biddingPrice: number;
  content: string;

}


export interface ICommentInputDTO {

  writer: mongoose.Types.ObjectId;
  biddingPrice: number;
  content: string;
  
}
