import { Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { format } from 'util';

export function accessLogger(req: Request, res: Response, next: NextFunction) {
  console.log('middleware');
  const message = format(
    'host:%s protocol:%s method:%s url:%s',
    req.hostname,
    req.protocol,
    req.method,
    req.url,
  );
  Logger.log(message);
  next();
}
