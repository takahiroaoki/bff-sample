import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { format } from 'util';

@Injectable()
export class AuthGuard implements CanActivate {
  private static readonly LOG_FORMAT = '[AuthGuard] %s';
  private readonly API_KEY: string;

  constructor(private readonly configService: ConfigService) {
    this.API_KEY = this.configService.get<string>('API-KEY');
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const gqlContext = GqlExecutionContext.create(context);
    const req = gqlContext.getContext().req;

    if (req.headers['api-key'] === this.API_KEY) {
      Logger.log(format(AuthGuard.LOG_FORMAT, 'The request is authenticated'));
      return true;
    }

    Logger.log(format(AuthGuard.LOG_FORMAT, 'Illegal request'));
    return false;
  }
}
