import { Connection, Repository } from 'typeorm';
import { Answers } from './answers.entity';
export declare const answersProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Answers>;
    inject: string[];
}[];
