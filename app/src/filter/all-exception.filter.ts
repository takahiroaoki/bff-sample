import { Catch, Logger, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown): void {
    Logger.error(exception);

    // TODO: make error response
  }
}
