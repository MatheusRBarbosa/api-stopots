import { createConnection } from 'typeorm';

const db_type = 'mongodb';
const db_host = process.env.HOST || 'ds145043.mlab.com';
const db_port: number = parseInt( process.env.PORT ) || 45043;
const db_username = process.env.USER;
const db_password = process.env.PASSWORD;
const db_database = process.env.SCHEMA || 'stopots';
const orm_sync = false //( process.env.RTDB_ORM_SYNC === 'true' ) || false;


export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
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
    }),
  },
];