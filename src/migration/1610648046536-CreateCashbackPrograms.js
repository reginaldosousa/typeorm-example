import {Table} from "typeorm";

export class CreateCashbackPrograms1610648046536 {

  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "cashback_programs",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true
          },
          {
            name: "tentant_id",
            type: "int",
            isNullable: false
          },
          {
            name: "external_ref_id",
            type: "varchar",
            isNullable: false
          },
          {
            name: "title",
            type: "varchar",
            isNullable: false
          },
          {
            name: "amount",
            type: "decimal",
            isNullable: false
          },
          {
            name: "flat",
            type: "boolean",
            isNullable: false,
            default: "false"
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
    await queryRunner.dropTable("cashback_programs");
  }

}
