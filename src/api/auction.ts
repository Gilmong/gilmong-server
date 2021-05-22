import { Router, Request, Response } from "express";
import request from "request";
import { check, validationResult } from "express-validator";
import config from "../config";

import Auction from "../models/Auction";

// import Profile from "../models/Profile";
// import { IProfileInputDTO } from "../interfaces/IProfile";

const router = Router();

/**
 *  @route GET api/auction
 *  @desc Get all auction
 *  @access Public
 */
router.get("/", async (req: Request, res: Response) => {
    console.log("finding Auction!");
    try {
        const auctions = await Auction.find().populate("dream",["title","image","keyword","content","price"]);
        // const profiles = await Profile.find().populate("user", ["name", "avatar"]);
        console.log("dreams : ",auctions)
        res.json(auctions);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;