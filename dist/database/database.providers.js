"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const db_type = 'mongodb';
const db_host = process.env.HOST || 'ds145043.mlab.com';
const db_port = parseInt(process.env.PORT) || 45043;
const db_username = process.env.USER;
const db_password = process.env.PASSWORD;
const db_database = process.env.SCHEMA || 'stopots';
const orm_sync = false;
exports.databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.createConnection({
                type: db_type,
                host: db_host,
                port: db_port,
                username: db_username,
                password: db_password,
                database: db_database,
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: orm_sync,
            });
        }),
    },
];
//# sourceMappingURL=database.providers.js.map