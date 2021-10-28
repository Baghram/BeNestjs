import { Types } from 'mongoose';

export class UserDTO {
  name: String;
  userName: String;
  phoneNumber: String;
  password: String;
  balance: Number;
  history: Types.ObjectId[];
}
