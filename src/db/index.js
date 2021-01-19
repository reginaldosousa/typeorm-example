import { createConnection } from "typeorm";

export default class DB {
  static instance = null;
  static async getConnection() {
    if (this.instance === null) {
      this.instance = await createConnection();
    }
    return this.instance;
  }
}
