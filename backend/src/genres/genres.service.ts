import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

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

  update(id: number, dto: UpdateGenreDto) {
    return this.prisma.genre.update({
      where: { id },
      data: {
        name: dto.name,
        movies: dto.movieIds
          ? { set: dto.movieIds.map((id) => ({ id })) }
          : undefined,
      },
    });
  }

  remove(id: number) {
    return this.prisma.genre.delete({
      where: { id },
    });
  }
}