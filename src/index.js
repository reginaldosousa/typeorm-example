import { createConnection } from "typeorm";
import { User } from "./model/User.js";

const start = async () => {
  try {
    const connection = await createConnection()

    const user1 = new User(0, "John");
    const user2 = new User(0, "David");

    await connection
              .manager
              .save([user1, user2])

    const userRepository = connection.getRepository(User);
    const allUsers = await userRepository.find()
    console.log(allUsers)

  } catch(error) {
    console.log("Error: ", error);
  }
}

start()