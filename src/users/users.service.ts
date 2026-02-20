import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable() // Bu sınıfın başka yerlere enjekte edilebilir (Dependency Injection) olduğunu belirtir.
export class UsersService {
  // Veritabanı olmadığı için verileri geçici olarak bu dizide (in-memory) tutuyoruz.
  private users: User[] = [];
  private idCounter = 1;

  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      id: this.idCounter++,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      // Bulunamazsa otomatik olarak HTTP 404 fırlatır.
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}