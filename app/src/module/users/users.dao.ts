import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user.model';
import { usersMockData } from '@mock-data/users.mock';
import { NewUserInput } from './dto/new-user.input';

/**
 * FIXME: This is a DAO for mock data file.
 */
@Injectable()
export class UsersDao {
  async findAll(): Promise<User[]> {
    return Promise.resolve(usersMockData.data.users);
  }

  async findOneById(id: string): Promise<User> {
    return Promise.resolve(usersMockData.data.users).then((users: User[]) =>
      users.find((e: User) => e.id === id),
    );
  }

  async create(newUserData: NewUserInput): Promise<User> {
    const newId = await this.findAll()
      .then((users) => users.sort((a, b) => Number(a.id) - Number(b.id)))
      .then((users) => users.at(-1).id)
      .then((id) => (Number(id) + 1).toString());
    usersMockData.data.users = [
      ...usersMockData.data.users,
      { id: newId, ...newUserData },
    ];
    return this.findOneById(newId);
  }
}
