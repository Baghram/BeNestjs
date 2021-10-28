import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/dto/controller/user.controller';
import { HistorySchema } from 'src/schemas/history.schema';
import { UserSchema } from 'src/schemas/user.schema';
import { UserService } from 'src/service/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'History', schema: HistorySchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
