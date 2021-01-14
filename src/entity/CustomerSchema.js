import { EntitySchema } from "typeorm"
import { BaseColumnSchemaPart } from "./BaseColumnSchemaPart.js"
import { Customer } from '../model/Customer'
import { Tenant } from '../model/Tenant'

export default new EntitySchema({
  name: "Customer",
  target: Customer,
  tableName: "customers",
  columns: {
    ...BaseColumnSchemaPart,
    externalRefId: {
      name: "external_ref_id",
      type: "varchar",
      nullable: false
    }
  },
  relations: {
    tenant: {
      type: "many-to-one",
      target: "Tenant",
      joinColumn: {
        name: 'tenant_id'
      }
    }
  }
})
