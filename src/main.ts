import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Konfigürasyonu
  const config = new DocumentBuilder()
    .setTitle('Üye Yönetim API')
    .setDescription('staj değerlendirmesi için geliştirilmiş REST API')
    .setVersion('1.0')
    .addTag('Members') 
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();