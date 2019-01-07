import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalFilter } from './common/filter/global.filter'
import * as cors from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  //app.useGlobalFilters(new GlobalFilter() )
  await app.listen(parseInt(process.env.PORT) || 3001);
}
bootstrap();
