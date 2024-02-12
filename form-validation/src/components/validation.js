import { object, string, number, date, InferType } from 'yup';

const validations = object({
  username: string().required(),
  password: string().required().min(5),
  email: string().email().required(),
  //age: number().required().positive().integer(),
  //website: string().url().nullable(),
 // createdOn: date().default(() => new Date()),
});


export default validations;