import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { format } from 'util';

@Injectable()
export class PerformanceLoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const start = Date.now();
        const startMessage = '[START]'
        Logger.log(startMessage);

        return next
            .handle()
            .pipe(
                tap(() => {
                    const endMessage = format('[END] %sms', Date.now() - start)
                    Logger.log(endMessage)
                }),
            );
    }
}