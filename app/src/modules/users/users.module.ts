import { Module, UseGuards } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/common/guard/auth.guard';

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
