import express from "express";
const router = express.Router();

//Autentikalt index oldal
router.get("/", (req, res) => {
  res.status(200).send("SERVER API 0.0.1 🙌 ");
});

export default router