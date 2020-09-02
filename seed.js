const { green, red } = require("chalk");
const { db, Project, Robot } = require("./server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });

    const project1 = await Project.create({
      id: 1,
      title: "Vroom about the place ",
      priority: 8,
      deadline: "2011-11-05",
    });

    const project2 = await Project.create({
      id: 2,
      title: "Nice long sit ",
      priority: 9,
      deadline: "2020-9-01",
    });

    const project3 = await Project.create({
      id: 3,
      title: "Chemical Bath",
      priority: 3,
      deadline: "3051-7-01",
    });

    const atticus = await Robot.create({
      id: 1,
      name: "Gody",
      imageUrl: "/images/r2d2.png",
      fuelType: "electric",
      fuelLevel: 40,
    });

    const Katticus = await Robot.create({
      id: 2,
      name: "Katticus",
      imageUrl: "cody.jpg",
      fuelType: "electric",
      fuelLevel: 55,
    });

    const Tatticus = await Robot.create({
      id: 3,
      name: "Patticus",
      imageUrl: "cody.jpg",
      fuelType: "electric",
      fuelLevel: 75,
    });

    await Tatticus.addProjects([project1, project2]);
    await project2.addRobots([Katticus, atticus]);
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
