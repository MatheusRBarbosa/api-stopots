import { Controller, Get, Param } from '@nestjs/common';
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

    @Get('/:letra')
    public async findOne(@Param('letra') letra){
        let response = this.service.findOne(letra);
    }
}