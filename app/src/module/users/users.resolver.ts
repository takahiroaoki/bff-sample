import { Query, Resolver } from "@nestjs/graphql";
import { User } from "src/model/user.model";

@Resolver(() => User)
export class UsersResolver {
    constructor() { }

    @Query(() => [User])
    findAll(): Promise<User[]> {
        console.log('findAll')
        return Promise.resolve([
            {
                id: '1',
                mail: 'test1@example.com',
            },
            {
                id: '2',
                mail: 'test2@example.com',
            },
        ])
    }
}