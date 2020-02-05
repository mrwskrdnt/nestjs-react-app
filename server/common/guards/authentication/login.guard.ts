import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LoginGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    await super.logIn(request);

    const result = (await super.canActivate(context)) as boolean;

    if (!result) {
      throw new UnauthorizedException();
    }

    return result;
  }
}