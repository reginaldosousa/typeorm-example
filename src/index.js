import { createConnection } from "typeorm";
import { Customer } from "./model/Customer.js";
import { Tenant } from "./model/Tenant.js";
import fastify from "fastify"

const start = async () => {
  try {
    const connection = await createConnection()


    const server = new fastify({
      logger: true
    })

    server.route({
      method: 'GET',
      url: '/customers',
      schema: {
        response: {
          200: {
            type: 'array'
          }
        }
      },
      handler: async (request, reply) => {
        const CustomerRepository = connection.getRepository(Customer);
        return CustomerRepository.find({ relations: ["tenant"] })
      }
    })

    server.route({
      method: 'POST',
      url: '/customers',
      schema: {
        response: {
          201: {
            type: 'object'
          }
        }
      },
      handler: async (request, reply) => {
        try {
          const customer = new Customer()
          customer.externalRefId = request.body.externalRefId
          const tenant = new Tenant();
          tenant.id = request.body.tenantId
          customer.tenant = tenant
          const CustomerRepository = connection.getRepository(Customer);

          await CustomerRepository.save(customer)

          reply
            .code(201)
            .header('Location', `${request.url}/${customer.id}`)
            .send()
        } catch(err) {
          server.log.error(err)
          return err
        }
      }
    })

    server.listen(3000, function (err, address) {
      if (err) {
        server.log.error(err)
        process.exit(1)
      }
    })


    // const tenant1 = new Tenant();
    // tenant1.title = "Vivo"
    // tenant1.slug = "vivo"
    // const tenant2 = new Tenant();
    // tenant2.title = "Claro"
    // tenant2.slug = "claro"

    // await connection
    //           .manager
    //           .save([tenant1, tenant2])

    // const customer1 = new Customer();
    // customer1.externalRefId = "abc123"
    // customer1.tenant = tenant1
    // const customer2 = new Customer();
    // customer2.externalRefId = "abc567"
    // customer2.tenant = tenant2

    // await connection
    //           .manager
    //           .save([customer1, customer2])

    // const CustomerRepository = connection.getRepository(Customer);
    // const allCustomers = await CustomerRepository.find({ relations: ["tenant"] })
    // console.log(allCustomers)
  } catch(error) {
    console.log("Error: ", error);
  }
}

start()