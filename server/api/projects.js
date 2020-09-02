import axios from "axios";
const router = require("express").Router();
const { Robot } = require("../db");

// router.get("/projects", async (req, res, next) => {
//   try {
//     const projects = await Project.findAll();
//     res.status(200).send(projects);
//   } catch (error) {
//     console.log(error);
//   }
// });
