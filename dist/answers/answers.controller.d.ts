import { AnswersService } from './answers.service';
export declare class AnswersController {
    private readonly service;
    constructor(service: AnswersService);
    findAll(res: any): Promise<void>;
    findOne(letter: any, res: any): Promise<void>;
}
