import DB from "../db/index.js";
import listCustomers from "./handlers/customers/index.js";

export default [
  {
    method: "GET",
    url: "/customers",
    schema: {
      response: {
        200: {
          type: "array",
        },
      },
    },
    handler: listCustomers,
  },
  {
    method: "POST",
    url: "/customers",
    schema: {
      response: {
        201: {
          type: "object",
        },
      },
    },
    handler: async (request, reply) => {
      try {
        const connection = await DB.getConnection();
        const customer = new Customer();
        customer.externalRefId = request.body.externalRefId;
        const tenant = new Tenant();
        tenant.id = request.body.tenantId;
        customer.tenant = tenant;
        const CustomerRepository = connection.getRepository(Customer);

        await CustomerRepository.save(customer);

        reply
          .code(201)
          .header("Location", `${request.url}/${customer.id}`)
          .send();
      } catch (err) {
        server.log.error(err);
        return err;
      }
    },
  },
];
