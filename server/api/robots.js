import axios from "axios";
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    let res = await axios.get("api/robots");
    let robots = res.data;
    res.status(200).send(robots);
  } catch (error) {
    console.log(error);
  }
});
