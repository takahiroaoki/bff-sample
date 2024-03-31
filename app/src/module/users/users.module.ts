import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UsersDao } from './users.dao';

@Module({
  providers: [UsersResolver, UsersService, UsersDao],
})
export class UsersModule {}
