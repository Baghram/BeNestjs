import * as mongoose from 'mongoose';

export const HistorySchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  amount: {
    type: String,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});
