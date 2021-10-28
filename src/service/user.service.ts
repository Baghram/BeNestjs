import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserDTO } from 'src/dto/user.dto';
import { ErrorResponse } from 'src/message.interface';
import { User } from 'src/interface/user.interface';
import { History } from 'src/interface/history.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly UserModel: Model<User>,
    @InjectModel('History') private readonly HistoryModel: Model<History>,
  ) {}
  // static UserModel: Model<UserDocument>;

  async addBalances(
    id: Types.ObjectId | String,
    balance: number,
  ): Promise<User | ErrorResponse> {
    try {
      let userExist = await this.UserModel.exists({ _id: id });
      if (!userExist) throw new Error('User Does Not Exist');
      let userData = await this.UserModel.findOne({ _id: id });
      balance = Number(balance);
      userData.balance += balance;
      let historyBalance = await this.HistoryModel.create({
        date: new Date(),
        amount: balance,
        owner: userData._id,
      });
      userData.history.push(historyBalance._id);
      await userData.save();
      return userData;
    } catch (error) {
      return {
        message: 'Add Balance failed',
        error: error.message,
      };
    }
  }
}
