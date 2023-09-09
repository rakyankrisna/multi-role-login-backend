import { Sequelize } from "sequelize";

const db = new Sequelize("multirole_login", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
