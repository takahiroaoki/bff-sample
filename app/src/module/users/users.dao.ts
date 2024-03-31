import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user.model';
import { usersMockData } from '@mock-data/users.mock';
import e from 'express';

@Injectable()
export class UsersDao {
    async findAll(): Promise<User[]> {
        return Promise.resolve(usersMockData.data.users);
    }

    async findOneById(id: string): Promise<User> {
        return Promise.resolve(usersMockData.data.users)
            .then((users: User[]) => users.find((e: User) => e.id === id));
    }
}