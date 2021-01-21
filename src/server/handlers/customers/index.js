import { getRepository } from "typeorm";
import { Customer } from "../../../model/Customer";

export default async (request, reply) => {
  const CustomerRepository = getRepository(Customer);
  return CustomerRepository.find({ relations: ["tenant"] });
};
