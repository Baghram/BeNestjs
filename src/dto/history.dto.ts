import { Types } from 'mongoose';

export class HistoryDTO {
  date: Date;
  amount: String;
  owner: Types.ObjectId;
}
