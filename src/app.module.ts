import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {dbName: 'todo'}),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
