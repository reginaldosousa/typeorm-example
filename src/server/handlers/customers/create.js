import { getRepository } from "typeorm";

export default async (request, reply) => {
  try {
    const customer = new Customer();
    customer.externalRefId = request.body.externalRefId;
    const tenant = new Tenant();
    tenant.id = request.body.tenantId;
    customer.tenant = tenant;
    const CustomerRepository = getRepository(Customer);

    await CustomerRepository.save(customer);

    reply.code(201).header("Location", `${request.url}/${customer.id}`).send();
  } catch (err) {
    server.log.error(err);
    return err;
  }
};
