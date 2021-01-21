import { createConnection } from "typeorm";
import Server from "./server/index.js";

const start = async () => {
  await createConnection();
  const server = new Server({
    logger: process.env.NODE_ENV !== "production",
  });

  server.start();
};

start();
