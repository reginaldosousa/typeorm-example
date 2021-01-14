import { EntitySchema } from "typeorm"
import { BaseColumnSchemaPart } from "./BaseColumnSchemaPart.js"
import { Customer } from '../model/Customer'
import { Tenant } from '../model/Tenant'

export default new EntitySchema({
  name: "Tenant",
  target: Tenant,
  tableName: "tenants",
  columns: {
    ...BaseColumnSchemaPart,
    title: {
      name: "title",
      type: "varchar",
      nullable: false
    },
    slug: {
      name: "slug",
      type: "varchar",
      nullable: false
    }
  },
  relations: {
    customers: {
      type: "one-to-many",
      target: "Customer"
    }
  }
})
