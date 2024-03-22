import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Path } from "./config/routes";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('RedCat test')
    .setDescription('The RedCat test task API description')
    .setVersion('1.0')
    .addTag('RedCat')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(Path.api.docs, app, document, {
    useGlobalPrefix: false,
    swaggerOptions: {
      persistAuthorization: true,
    }
  });

  await app.listen(Number(process.env.APPLICATION_PORT));
  console.log(`Application url: ${await app.getUrl()}`)
}
bootstrap();
