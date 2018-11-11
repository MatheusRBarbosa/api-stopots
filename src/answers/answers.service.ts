import { Injectable, Inject } from '@nestjs/common';
import { getMongoRepository } from 'typeorm';
import { Answers } from './answers.entity';

@Injectable()
export class AnswersService {

  constructor(
    @Inject('AnswersRepositoryToken')
    private readonly answersRepository = getMongoRepository(Answers),
  ) {}

  async findAll(): Promise<Answers[]> {
    return await this.answersRepository.find();
  }

  async findOne(letter: string): Promise<any> {
      letter = letter.toUpperCase();
      return await this.answersRepository.findOne({letra: letter});
    }
}
