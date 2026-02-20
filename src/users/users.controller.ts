import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users') // Endpoint rotasını belirler (http://localhost:3000/users)
export class UsersController {
  // Dependency Injection: Service'i constructor üzerinden enjekte ediyoruz.
  constructor(private readonly usersService: UsersService) {}

  @Post() // HTTP POST isteği
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get() // HTTP GET isteği
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id') // URL'den parametre alır (örn: /users/1)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); // + işareti string'i number'a çevirir
  }
}