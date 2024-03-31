import { Request, Response, NextFunction } from 'express';
import { Logger } from '@nestjs/common';
import { format } from 'util';

/**
 * This middleware log each access information.
 */

export const accessLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const LOG_FORMAT =
    '[accessLogger] host:%s request-id:%s protocol:%s method:%s url:%s';
  const message = format(
    LOG_FORMAT,
    req.hostname,
    req.headers['Req-Id'],
    req.protocol,
    req.method,
    req.url,
  );
  Logger.log(message);
  next();
};
