import { Connection, Repository } from 'typeorm';
import { Answers } from './answers.entity';

export const answersProviders = [
    {
      provide: 'AnswersRepositoryToken',
      useFactory: (connection: Connection) => connection.getRepository(Answers),
      inject: ['DbConnectionToken'],
    },
  ];