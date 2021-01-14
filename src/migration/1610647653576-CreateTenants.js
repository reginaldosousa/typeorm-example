import {Table} from "typeorm";

export class CreateTenants1610647653576 {

  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "tenants",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true
          },
          {
            name: "title",
            type: "varchar",
            isNullable: false
          },
          {
            name: "slug",
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
    await queryRunner.dropTable("tenants");
  }

}
