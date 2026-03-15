import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';

@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.genre.findMany();
  }

  findOne(id: number) {
    return this.prisma.genre.findUnique({
      where: { id },
    });
  }

  create(dto: CreateGenreDto) {
    return this.prisma.genre.create({
      data: {
        name: dto.name,
        movies: dto.movieIds
          ? { connect: dto.movieIds.map((id) => ({ id })) }
          : undefined,
      },
    });
  }
}