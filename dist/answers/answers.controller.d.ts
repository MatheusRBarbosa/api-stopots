import { AnswersService } from './answers.service';
export declare class AnswersController {
    private readonly service;
    constructor(service: AnswersService);
    findAll(): Promise<import("./answers.entity").Answers[]>;
    findOne(letra: any): Promise<any>;
}
