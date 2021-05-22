// import { Router, Request, Response } from "express";
// import request from "request";
// import { check, validationResult } from "express-validator";
// import config from "../config";

// import Comment from "../models/Comment";

// // import Profile from "../models/Profile";
// // import { IProfileInputDTO } from "../interfaces/IProfile";

// const router = Router();

// /**
//  *  @route GET api/dream
//  *  @desc Get all dreams
//  *  @access Public
//  */
// router.get("/", async (req: Request, res: Response) => {
//     console.log("finding dream!");
//     try {
//         const dreams = await Dream.find();
//         console.log("dreams : ",dreams)
//         res.json(dreams);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Server Error");
//     }
// });