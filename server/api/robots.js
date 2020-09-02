import axios from "axios";
const router = require("express").Router();
const { Robot } = require("../db");

// router.get("/robots", async (req, res, next) => {
//   try {
//     const robots = await Robot.findAll();
//     res.status(200).send(robots);
//   } catch (error) {
//     console.log(error);
//   }
// });
