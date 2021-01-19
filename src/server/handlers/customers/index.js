import DB from '../../../db/index.js'
import { Customer } from '../../../model/Customer'

export default async (request, reply) => {
  const connection = await DB.getConnection()
  const CustomerRepository = connection.getRepository(Customer);
  return CustomerRepository.find({ relations: ["tenant"] })
}
