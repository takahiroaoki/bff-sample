import { Injectable } from '@nestjs/common';
import { UsersDao } from 'src/module/users/users.dao';
import { User } from 'src/model/user.model';

@Injectable()
export class UsersService {
    constructor(private readonly usersDao: UsersDao) { }

    async findAll(): Promise<User[]> {
        return this.usersDao.findAll();
    }
}