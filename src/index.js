import { createConnection } from "typeorm";
import { Customer } from "./model/Customer.js";
import { Tenant } from "./model/Tenant.js";

const start = async () => {
  try {
    const connection = await createConnection()

    const tenant1 = new Tenant();
    tenant1.title = "Vivo"
    tenant1.slug = "vivo"
    const tenant2 = new Tenant();
    tenant2.title = "Claro"
    tenant2.slug = "claro"

    await connection
              .manager
              .save([tenant1, tenant2])

    const customer1 = new Customer();
    customer1.externalRefId = "abc123"
    customer1.tenant = tenant1
    const customer2 = new Customer();
    customer2.externalRefId = "abc567"
    customer2.tenant = tenant2

    await connection
              .manager
              .save([customer1, customer2])

    const CustomerRepository = connection.getRepository(Customer);
    const allCustomers = await CustomerRepository.find({ relations: ["tenant"] })
    console.log(allCustomers)
  } catch(error) {
    console.log("Error: ", error);
  }
}

start()