const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET='Abhinavisagoodboy';
//create a user using post:"/api/auth/createuser".No login require

router.post(
  "/",
  [
    body("name", "Enter the valid NAme").isLength({ min: 3 }),
    body("email", "Enter the valid e-mail").isEmail(),

    body("password", " password must be at least 5 chars long").isLength({
      min: 5,
    }),
  ],

  async (req, res) => {
    //if there are errors,return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with email exist already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email already exists" });
      }
      const salt=await bcrypt.genSalt(10);
      const secPass= await bcrypt.hash(req.body.password,salt) ;
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data={
        user:{
          id:user.id
        }
      }
      const authtoken=jwt.sign(data,JWT_SECRET);
      console.log(authtoken);
      //res.json(user);
      res.json({authtoken});

    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error ocuured");
    }
  }
);
module.exports = router;