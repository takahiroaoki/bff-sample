import { Request, Response, NextFunction } from 'express';

/**
 * This middlware append request-id to header of each request.
 * Ideally, request-id should be appended beforehand, by web server.
 */

const generateUUID = (): string => {
  const timestamp = Date.now().toString(16);
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `${timestamp}-${randomHex}`;
};

export const requestIdAppender = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  req.headers['Req-Id'] = generateUUID();
  next();
};
