import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user.model';
import { usersMockData } from '@mock-data/users.mock';

@Injectable()
export class UsersDao {
    async findAll(): Promise<User[]> {
        return Promise.resolve(usersMockData.data.users);
    }
}