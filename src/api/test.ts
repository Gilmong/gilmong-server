import { Router, Request, Response } from "express";
import request from "request";
import { check, validationResult } from "express-validator";
import config from "../config";

import Test from "../models/Test";

// import Profile from "../models/Profile";
// import { IProfileInputDTO } from "../interfaces/IProfile";

const router = Router();

/**
 *  @route GET api/test
 *  @desc Get all test
 *  @access Public
 */
router.get("/", async (req: Request, res: Response) => {
    console.log("finding test!");
    try {
        const test = await Test.find();
        console.log("dreams : ",test)
        res.json(test);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;