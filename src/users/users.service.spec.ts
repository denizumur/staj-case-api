import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common';
import { MembershipType } from './enums/membership-type.enum';
import { Status } from './enums/status.enum';

describe('UsersService', () => {
  let service: UsersService;
  
  const mockUserRepository = {
    create: jest.fn().mockImplementation(dto => dto),
    save: jest.fn().mockImplementation(user => Promise.resolve({ id: 1, ...user })),
    findOne: jest.fn().mockImplementation(({ where: { id } }) => {
      if (id === 1) return Promise.resolve({ id: 1, name: 'Ahmet', status: Status.ACTIVE });
      return Promise.resolve(null);
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('başarılı bir şekilde kullanıcı oluşturmalı', async () => {
    const dto = { name: 'Ahmet', email: 'a@a.com', membershipType: MembershipType.VIP, status: Status.ACTIVE };
    expect(await service.create(dto)).toEqual({ id: 1, ...dto });
  });

  it('olmayan bir ID ile istek atıldığında NotFoundException fırlatmalı', async () => {
    await expect(service.findOne(99)).rejects.toThrow(NotFoundException);
  });
});