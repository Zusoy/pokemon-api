import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());

  const options = new DocumentBuilder()
    .setTitle('Pokemon')
    .setDescription('The Pokemon API')
    .setVersion('1.0')
    .addTag('pokemons')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);
  
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
