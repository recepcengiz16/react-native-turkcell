import { object, string, number, date, InferType } from 'yup';

const messages= {
    username:"Bu alan zorunludur",
    password:"Bu alan zorunludur",
    email:"Geçerli email adresi giriniz",

}

const validations = object({
  username: string().required(messages.username),
  password: string().required(messages.password).min(5),
  email: string().email().required(messages.email),
  //age: number().required().positive().integer(),
  //website: string().url().nullable(),
 // createdOn: date().default(() => new Date()),
});


export default validations;