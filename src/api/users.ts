import express, { Request, Response } from "express";
import gravatar from "gravatar";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../config";
import { check, validationResult } from "express-validator";

const router = express.Router();

import User from "../models/User";

/**
 *  @route Post api/users
 *  @desc Register User
 *  @access Public
 */
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if  user exists
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({
          errors: [{ msg: "User already exists" }],
        });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pq",
        d: "mm",
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // Encrpyt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

/**
 *  @route GET api/users
 *  @desc Get all users
 *  @access Public
 */
 router.get("/", async (req: Request, res: Response) => {
  console.log("finding users!");
  try {
      const users = await User.find();
      console.log("dreams : ",users)
      res.json(users);
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
  }
});

/**
 *  @route GET api/users/:user_id
 *  @desc Get one user
 *  @access Public
 */
 router.get("/:user_id", async (req: Request, res: Response) => {
  console.log("finding one users!");
  try {
      const user_id = req.params.user_id;
      const users = await User.findById(user_id);
      console.log("dreams : ",users)
      res.json(users);
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
  }
});

module.exports = router;
