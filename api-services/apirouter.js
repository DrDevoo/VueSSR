import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
dotenv.config()
const router = express.Router();
router.use(bodyParser.json())

//Autentikalt index oldal
router.get("/", (req, res) => {
  res.status(200).send("SERVER API 0.0.2 🙌 ");
});
router.get("/asd", (req, res) => {
  res.status(200).send("API 0.0.2 🙌 ");
});

//Routes import
import UsersRoute from './users.js'
//Routes use
router.use('/users', UsersRoute)

//Adatbazis kapcsolat
mongoose.set("strictQuery", false);
mongoose.connect(
    // eslint-disable-next-line no-undef
    process.env.DB_CONNECTION, 
    () => {console.log('--Adatbazis kapcsolat: '+mongoose.connection.readyState+'--')
});

export default router