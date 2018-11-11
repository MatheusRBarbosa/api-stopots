import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalFilter } from './common/filter/global.filter'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalFilters(new GlobalFilter() )
  await app.listen(parseInt(process.env.PORT) || 3001);
}
bootstrap();
