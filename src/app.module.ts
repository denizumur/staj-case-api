import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'gymplus.sqlite', // Proje dizininde bu dosyayı otomatik oluşturacak
      entities: [User],
      synchronize: true, // Tabloları entity'lere bakarak otomatik oluşturur (Sadece Dev ortamında true olmalı)
    }),
    UsersModule,
  ],
})
export class AppModule {}