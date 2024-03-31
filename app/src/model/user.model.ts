import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
    @Field()
    id: string;

    @Field()
    mail: string;
}