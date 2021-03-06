import { Router, Request, Response } from "express";
import request from "request";
import { check, validationResult } from "express-validator";
import config from "../config";

import Comment from "../models/Comment";

// import Profile from "../models/Profile";
// import { IProfileInputDTO } from "../interfaces/IProfile";

const router = Router();

/**
 *  @route GET api/comment
 *  @desc Get all comment
 *  @access Public
 */
router.get("/", async (req: Request, res: Response) => {
    console.log("finding Comment!");
    try {
        const comments = await Comment.find();
        console.log("dreams : ",comments)
        res.json(comments);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;