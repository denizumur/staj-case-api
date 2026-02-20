import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], // Sisteme yeni modülü dahil ettik.
})
export class AppModule {}