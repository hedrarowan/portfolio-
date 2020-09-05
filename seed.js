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
      imageUrl:
        "https://www.telegraph.co.uk/content/dam/films/2016/11/14/blade_runner_2963493k_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450",
      fuelType: "electric",
      fuelLevel: 40,
    });

    const Katticus = await Robot.create({
      id: 2,
      name: "Bimpson",
      imageUrl:
        "https://cdn.digg.com/wp-content/uploads/2020/07/01014219/942218454-Screen-Shot-2020-06-30-at-9.42.03-PM.jpg",
      fuelType: "electric",
      fuelLevel: 55,
    });

    const Tatticus = await Robot.create({
      id: 3,
      name: "Donna Haraway ",
      imageUrl:
        "https://www.berlinerfestspiele.de/media/2017/maerzmusik_2017/mm17_bilder/mm17_bilder_duplex/mm17_haraway_d_582w.jpg",
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
