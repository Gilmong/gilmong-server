// import mongoose from "mongoose";
// import config from "../config";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(config.mongoURI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     });

//     console.log("Mongoose Connected ...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";
import config from "../config";
import User from "../models/User";
import Dream from "../models/Dream";
import Comment from "../models/Comment";
import Auction from "../models/Auction";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("Mongoose Connected ...");
    User.createCollection().then(function(collection) {
      console.log('User Collection is created!');
    });
    Dream.createCollection().then(function(collection) {
      console.log('Dream Collection is created!');
    });
    Comment.createCollection().then(function(collection) {
      console.log('Comment Collection is created!');
    });
    Auction.createCollection().then(function(collection) {
      console.log('Auction Collection is created!');
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;