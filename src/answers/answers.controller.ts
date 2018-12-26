import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { AnswersService } from './answers.service'
import { GlobalError } from '../common/DTOs/error/global.error'

@Controller('/resposta')
export class AnswersController{

    constructor(
        private readonly service: AnswersService,
    ) {}

    @Get()
    public async findAll(@Res() res){
        try{
            res
            .status(HttpStatus.OK)
            .send(await this.service.findAll());
        }
        catch (err){
            let msg = err.message;
            let status = HttpStatus.BAD_GATEWAY;
            let result = new GlobalError(msg, status);
            res
            .status(HttpStatus.BAD_GATEWAY)
            .send(result);
        }
    }

    @Get('/:letra')
    public async findOne(@Param('letra') letter, @Res() res){
        try{
            res
            .status(HttpStatus.OK)
            .send(this.service.findOne(letter))
        }
        catch (err){
            let msg = err.message;
            let status = HttpStatus.BAD_GATEWAY;
            let result = new GlobalError(msg, status);
            res
            .status(HttpStatus.BAD_GATEWAY)
            .send(result);
        }
    }
}