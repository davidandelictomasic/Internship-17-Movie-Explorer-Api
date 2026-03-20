import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: CreateUserDto) {
    if (!dto.email || !dto.password) {
      throw new BadRequestException('Email and password are required');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: dto.password,
      },
    });

    return { id: user.id, email: user.email, role: user.role };
  }

  async login(dto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    if (dto.password !== user.password) {
      throw new BadRequestException('Invalid credentials');
    }

    return { id: user.id, email: user.email, role: user.role };
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  create(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        email: dto.email,
        password: dto.password,
      },
    });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        email: dto.email,
        password: dto.password,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
