import { Module } from "@nestjs/common";
import { AnswersModule } from '../answers/answers.module'

@Module( {
  imports: [ AnswersModule ]
} )

export class AppModule { }
