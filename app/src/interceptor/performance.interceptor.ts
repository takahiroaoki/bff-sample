import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { format } from 'util';

/**
 * This interceptor log the performance of each request.
 */

@Injectable()
export class PerformanceInterceptor implements NestInterceptor {
  private static readonly LOG_FORMAT =
    '[PerformanceInterceptor] host:%s request-id:%s time:%sms';

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    const gqlContext = GqlExecutionContext.create(context);
    const req = gqlContext.getContext().req;

    return next.handle().pipe(
      tap(() => {
        const endMessage = format(
          PerformanceInterceptor.LOG_FORMAT,
          req.headers['host'],
          req.headers['Req-Id'], // Added by requestIdAppender
          Date.now() - start,
        );
        Logger.log(endMessage);
      }),
    );
  }
}
