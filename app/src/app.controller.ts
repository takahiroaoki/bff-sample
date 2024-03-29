import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('private')
export class AppController {
  constructor() { }

  @Get('healthcheck')
  @HttpCode(200)
  healthcheck(): string {
    return 'success';
  }
}
