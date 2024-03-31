import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { format } from 'util';

@Injectable()
export class PerformanceInterceptor implements NestInterceptor {
    private static readonly LOG_FORMAT = '[PerformanceInterceptor] time:%sms host:%s user-agent:%s referer:%s';

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const start = Date.now();
        const gqlContext = GqlExecutionContext.create(context)
        const req = gqlContext.getContext().req;

        return next
            .handle()
            .pipe(
                tap(() => {
                    const endMessage = format(
                        PerformanceInterceptor.LOG_FORMAT,
                        Date.now() - start,
                        req.headers['host'],
                        req.headers['user-agent'],
                        req.headers['referer'],
                    )
                    Logger.log(endMessage)
                }),
            );
    }
}