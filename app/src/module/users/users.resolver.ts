import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/model/user.model';
import { UsersService } from './users.service';
import { NewUserInput } from './dto/new-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { nullable: true })
  async user(@Args('id') id: string): Promise<User> {
    return this.usersService.findOneById(id);
  }

  @Mutation(() => User)
  async addUser(@Args('newUserData') newUserData: NewUserInput): Promise<User> {
    return this.usersService.addUser(newUserData);
  }
}
