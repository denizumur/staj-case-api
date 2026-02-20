import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService], // Dependency Injection konteynerine Service'i kaydediyoruz.
})
export class UsersModule {}