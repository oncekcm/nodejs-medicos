import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "projectsdb_sfhi", // db name,
  "projectsdb_sfhi_user", // username
  "qiJ9NG9bPVtIURwUknt5lAeI6liQObNt", // password
  {
    host: "postgres://projectsdb_sfhi_user:qiJ9NG9bPVtIURwUknt5lAeI6liQObNt@dpg-cpec6avsc6pc739dhr2g-a.oregon-postgres.render.com/projectsdb_sfhi",
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);
