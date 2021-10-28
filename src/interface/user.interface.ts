import { Types } from 'mongoose';

Types;
export interface User {
  _id?: Types.ObjectId | String;
  email: String;
  password: String;
  name: String;
  phoneNumber: String;
  balance: number;
}
