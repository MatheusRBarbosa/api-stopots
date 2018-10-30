"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const answers_entity_1 = require("./answers.entity");
exports.answersProviders = [
    {
        provide: 'AnswersRepositoryToken',
        useFactory: (connection) => connection.getRepository(answers_entity_1.Answers),
        inject: ['DbConnectionToken'],
    },
];
//# sourceMappingURL=answers.providers.js.map