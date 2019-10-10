import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { GlobalFilter } from './common/filter/global.filter'
import * as cors from 'cors'

const pacote = require( '../package.json' );
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger documentation
  const options = new DocumentBuilder()
  .setTitle( pacote.name )
  .setDescription( pacote.description )
  .setVersion( pacote.version )
  .addTag('Stopots')
  .setSchemes('http', 'https')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  app.use(cors());
  //app.useGlobalFilters(new GlobalFilter() )
  await app.listen(parseInt(process.env.PORT) || 3001);
}
bootstrap();
