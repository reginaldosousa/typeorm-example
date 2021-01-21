import { parse } from "pg-connection-string";

const defaults = {
  host: "database",
  port: 5432,
  username: "postgres",
  password: "",
  database: "app_dev",
};

let parsed = {};

if (process.env.DATABASE_URL !== "") {
  parsed = parse(process.env.DATABASE_URL);
  parsed.username = parsed.user;
}

export default {
  ...defaults,
  ...parsed,
  type: "postgres",
  synchronize: false,
  logging: "error",
  entities: ["src/entity/**/*.js"],
  migrations: ["src/migration/**/*.js"],
  subscribers: ["src/subscriber/**/*.js"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
