import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common'; // 1. Güvenlik görevlisini import ettik

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. Kapıdaki Güvenlik (Validation Pipe)
  // Gelen tüm istekleri DTO'daki kurallara göre otomatik denetler
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO'da olmayan çöp verileri otomatik siler
      forbidNonWhitelisted: true, // Eğer DTO'da olmayan ekstra bir alan yollanırsa isteği tamamen reddeder
      transform: true, // Gelen JSON verisini otomatik DTO nesnesine dönüştürür
    }),
  );

  // GymPlus AI Özel Swagger Konfigürasyonu
  const config = new DocumentBuilder()
    .setTitle('GymPlus AI - Üye Yönetim API')
    .setDescription('GymPlus AI staj değerlendirmesi için geliştirilmiş, spor salonu üyelerini yöneten REST API.')
    .setVersion('1.0')
    .addTag('Members') 
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
