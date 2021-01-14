import {Table} from "typeorm";

export class CreateCustomers1610462067628 {

  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "customers",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true
          },
          {
            name: "tenant_id",
            type: "int",
            isNullable: false
          },
          {
            name: "external_ref_id",
            type: "varchar",
            isNullable: false
          },
          {
            name: "created_at",
            type: "timestamp",
            default: 'now()',
            isNullable: false
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: 'now()',
            isNullable: false
          }
        ]
      }
    ),
    true)
  }

  async down(queryRunner) {
    await queryRunner.dropTable("customers");
  }

}
