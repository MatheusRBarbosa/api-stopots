import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { AnswersService } from './answers.service'
import { GlobalError } from '../common/DTOs/error/global.error'
import { ApiUseTags, ApiImplicitParam, ApiResponse } from '@nestjs/swagger';

@Controller('/resposta')
@ApiUseTags('resposta')
export class AnswersController{

    constructor(
        private readonly service: AnswersService,
    ) {}

    @Get()
    @ApiResponse({ status: 200, description: 'Palavras encontradas ou array vazio'})
    @ApiResponse({ status: 502, description: 'Server error.'})
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
    @ApiImplicitParam({
        name: 'letra',
        description: 'insira a letra que deseja procurar',
        required: true,
        type: String,
      })
    @ApiResponse({ status: 200, description: 'Palavra encontrada ou array vazio'})
    @ApiResponse({ status: 502, description: 'Server error.'})
    public async findOne(@Param('letra') letter, @Res() res){
        try{
            res
            .status(HttpStatus.OK)
            .send(await this.service.findOne(letter))
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