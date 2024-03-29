import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard {
    async canActivate() {
        // TODO: authenticate request
        return true;
    }
}