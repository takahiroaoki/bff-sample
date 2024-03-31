import { Query, Resolver } from "@nestjs/graphql";
import { User } from "src/model/user.model";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }

    @Query(() => [User])
    async users(): Promise<User[]> {
        return this.usersService.findAll();
    }
}