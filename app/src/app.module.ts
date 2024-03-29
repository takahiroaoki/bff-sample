import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { accessLogger } from './common/middleware/logger.middleware';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(accessLogger)
      .exclude('/private/(.*)')
      .forRoutes('/*');
  }
}
