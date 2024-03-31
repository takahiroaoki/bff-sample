import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guard/auth.guard';

@Module({
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthGuard
        },
        UsersResolver,
    ]
})
export class UsersModule { }
