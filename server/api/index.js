const router = require("express").Router();
const { Robot, Project } = require("../db");

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

router.put("/robots/:robotId", async (req, res, next) => {
  try {
    const robotId = req.params.robotId;
    const robot = await Robot.findByPk(robotId);
    await robot.update(req.body);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

router.put("/projects/:projectId", async (req, res, next) => {
  try {
    const projectId = req.params.projectId;
    const project = await Project.findByPk(projectId);
    await project.update(req.body);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

router.delete("/robots/:robotId", (req, res, next) => {
  Robot.destroy({
    where: {
      id: req.params.robotId,
    },
  });
  res.status(204).end();
});

router.delete("/projects/:projectId", (req, res, next) => {
  Project.destroy({
    where: {
      id: req.params.projectId,
    },
  });
  res.status(204).end();
});

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});
module.exports = router;
