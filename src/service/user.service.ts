import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserDTO } from 'src/dto/user.dto';
import { ErrorResponse } from 'src/message.interface';
import { User } from 'src/interface/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}
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
