import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getInternalInfo(username);

    // TODO: use ncrypt lib
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}