import { Controller, Get } from '@nestjs/common';
import { AnswersService } from './answers.service'

@Controller('/resposta')
export class AnswersController{

    constructor(
        private readonly service: AnswersService,
    ) {}

    @Get()
    findAll(){
        return this.service.findAll();
    }
}