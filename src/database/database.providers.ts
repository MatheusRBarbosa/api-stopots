import { createConnection } from 'typeorm';
import { DataBaseConfig } from '../common/config/database.config'

const config = new DataBaseConfig;

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: config.type,
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: config.sync,
    }),
  },
];