const express = require("express");
const { UserModel } = require("../Models/UserModel");
require('dotenv').config()
const saltRounds = parseInt(process.env.saltrounds) || 10;
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    console.log(req.body)
  const { name, email, username, password } = req.body;

  try {
    if (!name || !email || !username || !password) {
      res.status(200).send({ message: "Input fields are required!" });
    } else {
      const existingUser = await UserModel.findOne({ email });

      if (existingUser) {
        res
          .status(200)
          .send({ message: "User with this Email Already Exists!" });
      } else {
        bcrypt.hash(password, saltRounds, async function (err, hash) {
          if (err) {
            console.log(err.message);
            res.status(500).send({ message: "An Error Occured", error: err });
          } else {
            const newUser = new UserModel({
              name,
              username,
              email,
              password: hash,
            });
            await newUser.save();
            res.status(201).send({ message: "User created successfully!" });
          }
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error", error: err.message  });
  }
});

userRouter.post("/login",async (req, res) => {
    try{
        const {email,password} = req.body

        if(!email || !password){
            res.status(200).send({message:"All Input fields are required!"})
         }else{
            const user = await UserModel.findOne({email})
            if(!user){
                res.status(202).send({message:"User Does Not Exist!"})
            }else{
                const passwordMatch = await bcrypt.compare(password, user.password);
    
                if (passwordMatch) {
                    const token = jwt.sign({ user }, process.env.SecretKey,{ expiresIn: 5*60 });
                    res.status(200).send({ message: "Login successful!", token });
                } else {
                    res.status(200).send({ message: "Incorrect password!" });
                }
            }
         }
    
      }
      catch(err){
        console.log(err)
        res.status(500).send({ message: "Internal Server Error", error: err.message  });
    } 
})

userRouter.patch('/update/:userID', async (req, res) => {
    try {
      const userID = req.params.userID;
      const { name, username, email, password } = req.body;
  
      const updateFields = {};
      if (name) updateFields.name = name;
      if (username) updateFields.username = username;
      if (email) updateFields.email = email;
      if (password) {
        updateFields.password = await bcrypt.hash(password, saltRounds);
      }
  
      const user = await UserModel.findOneAndUpdate(
        { _id: userID },
        updateFields,
        { new: true }
      );
  
      if (!user) {
        res.status(404).send({ message: "User Not found!" });
      } else {
        res.status(200).send({ message: "User updated successfully!", user });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal Server Error", error: err.message });
    }
  });
  

module.exports = {
  userRouter,
};
