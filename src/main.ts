import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Variables
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3000;
  const HOST = process.env.HOST ?? "localhost";
  // Cors
  app.enableCors();
  // Swagger
  const config = new DocumentBuilder()
    .setTitle('API Taller')
    .setDescription('Esta api es del taller..')
    .setVersion('1.0')
    .addTag('taller')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  // Listen
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Escuchando en http://${HOST}:${PORT}`);
}
bootstrap();
