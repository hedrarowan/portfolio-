const router = require("express").Router();
const { Robot, Project } = require("../db");
const project = require("../db/project");

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

// router.use("/projects", require("./projects"));
// router.use("/robots", require("./robots"));

router.get("/robots", async (req, res, next) => {
  try {
    const robots = await Robot.findAll();
    res.status(200).send(robots);
  } catch (error) {
    console.log(error);
  }
});

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.status(200).send(projects);
  } catch (error) {
    console.log(error);
  }
});

router.get("/robots/:robotId", async (req, res, next) => {
  try {
    // console.log(req.body, "im rick");
    const robotId = await req.params.robotId;
    const robot = await Robot.findByPk(robotId);

    res.send(robot);
  } catch (error) {
    console.log(error);
  }
});

router.get("/robots/:robotId/projects", async (req, res, next) => {
  try {
    const robotId = await req.params.robotId;
    const robot = await Robot.findAll({
      where: { id: robotId },
    });
    const projectId = robot[0].projectId;

    if (projectId === null) {
      res.send("No Projects Currently");
    } else {
      const projects = await Project.findAll({
        where: { id: projectId },
      });

      res.send(projects);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/projects/:projectId", async (req, res, next) => {
  try {
    const projectId = await req.params.projectId;
    const project = await Project.findByPk(projectId);
    res.send(project);
  } catch (error) {
    console.log(error);
  }
});

router.get("/projects/:projectId/robots", async (req, res, next) => {
  try {
    const projectId = await req.params.projectId;
    const project = await Project.findAll({
      where: { id: projectId },
    });

    const robots = await Robot.findAll({
      where: { projectId: projectId },
    });

    if (robots.length === 0) {
      res.send("No Robots Currently");
    } else {
      res.send(robots);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/robots", (req, res, next) => {
  const newRobot = Robot.create(req.body);
  res.send(newRobot);
});

router.post("/projects", (req, res, next) => {
  const newProject = Project.create(req.body);
  res.send(newProject);
});
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});
module.exports = router;
