import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { answersProviders } from './answers.providers';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
      ...answersProviders,
      AnswersService,
    ],
    controllers: [AnswersController],
  })

export class AnswersModule { }