import { Answers } from './answers.entity';
export declare class AnswersService {
    private readonly answersRepository;
    constructor(answersRepository?: import("typeorm/repository/MongoRepository").MongoRepository<Answers>);
    findAll(): Promise<Answers[]>;
    findOne(letter: string): Promise<Answers>;
}
