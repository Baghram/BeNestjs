import { Types } from 'mongoose';

export interface History {
  _id?: Types.ObjectId | String;
  date: Date;
  amount: String;
}
