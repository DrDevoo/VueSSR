import express from "express";
const router = express.Router();

import Users from './models/users-model.js'

router.get("/", (req, res) => {
  res.status(200).send("Users 🙌 ");
});

router.get("/get", async (req, res) => {
  try{
     const users = await Users.find();
     res.json(users);
  }catch(err){
     res.json({ message: err });
  }
});

router.post("/add", async (req,res) =>{
     try{
         const name = req.body.name
         const age = req.body.age

          const user = await Users.create({  
               name: name,
               age: age,
          });
          let saveduser = await user.save();

         res.status(200).send("saved user: "+saveduser);
     }catch(err){
          console.log(err)
     }finally{
          console.log("User letrehozva!")
     }
})

export default router