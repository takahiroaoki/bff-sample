import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { format } from 'util';

@Injectable()
export class PerformanceLoggingInterceptor implements NestInterceptor {
    private static readonly START_LOG_FORMAT = '[START] host:%s user-agent:%s referer:%s';
    private static readonly END_LOG_FORMAT = '[END] host:%s user-agent:%s referer:%s time:%sms';

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const start = Date.now();

        const gqlContext = GqlExecutionContext.create(context)
        const req = gqlContext.getContext().req;
        const startMessage = format(
            PerformanceLoggingInterceptor.START_LOG_FORMAT,
            req.headers['host'],
            req.headers['user-agent'],
            req.headers['referer'],
        )
        Logger.log(startMessage);

        return next
            .handle()
            .pipe(
                tap(() => {
                    const endMessage = format(
                        PerformanceLoggingInterceptor.END_LOG_FORMAT,
                        req.headers['host'],
                        req.headers['user-agent'],
                        req.headers['referer'],
                        Date.now() - start,
                    )
                    Logger.log(endMessage)
                }),
            );
    }
}