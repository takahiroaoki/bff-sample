import { Injectable } from '@nestjs/common';
import { UsersDao } from 'src/module/users/users.dao';
import { User } from 'src/model/user.model';
import { NewUserInput } from './dto/new-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly usersDao: UsersDao) {}

  async findAll(): Promise<User[]> {
    return this.usersDao.findAll();
  }

  async findOneById(id: string): Promise<User> {
    return this.usersDao.findOneById(id);
  }

  async addUser(newUserData: NewUserInput): Promise<User> {
    return this.usersDao.create(newUserData);
  }
}
