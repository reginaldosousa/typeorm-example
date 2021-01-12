import {Table} from "typeorm";

export class CreateCustomers1610462067628 {

    async up(queryRunner) {
      await queryRunner.createTable(new Table({
            name: "customers",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                }
            ]
        }), true)
    }

    async down(queryRunner) {
      await queryRunner.dropTable("customers");
    }

}
