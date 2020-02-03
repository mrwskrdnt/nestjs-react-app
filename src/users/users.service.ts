import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { UserInternalDto } from './dto/user-internal.dto';
import { UserRole } from './enums/user-role';
import * as config from '../common/config'

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectModel('users') private readonly userModel: Model<User>
  ) { }

  async onModuleInit() {
    console.log('Checking current sa user...');

    const { username } = config.sa;

    const sa = await this.userModel.findOne({
      username,
    });

    if (sa) {
      console.log('Sa user exists. Skip creating the sa user.');
      return;
    }

    console.log('Creating the sa user...');

    const { password } = config.sa;

    const newSa = new this.userModel({
      username,
      password,
      roles: [UserRole.DEFAULT, UserRole.ADMIN, UserRole.SUPER_ADMIN]
    });

    await this.userModel.create(newSa);

    console.log('The sa user created.');
  }

  async getInternalInfo(username: string): Promise<UserInternalDto|null> {
    const internalInfo = await this.userModel
      .findOne({ username })
      .select(['id', 'username', 'password', 'roles']);

    return internalInfo && internalInfo.toObject()
  }

  async getUser(id: string): Promise<any> {
    const user = await this.userModel
      .findById(id)
      .select(['id', 'username']);

    return user && user.toObject();
  }

  async getProfile(id: string) {
    const profile = await this.userModel
      .findById(id)
      .populate(
        'pet',
        ['name', 'picUrl']
      )
      .select(
        ['username', 'pet']
      );

    return profile && profile.toObject();
  }
}