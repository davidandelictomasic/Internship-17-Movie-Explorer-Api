import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(search?: string, sort?: string, genre?: string) {
    return this.prisma.movie.findMany({
      where: {
        ...(search && {
          title: { contains: search, mode: 'insensitive' as const },
        }),
        ...(genre && {
          genres: { some: { name: genre } },
        }),
      },
      orderBy: sort === 'title'
        ? { title: 'asc' }
        : sort === 'rating'
          ? { rating: 'desc' }
          : sort === 'release_date'
            ? { year: 'desc' }
            : undefined,
      include: { genres: true },
    });
  }

  findOne(id: number) {
    return this.prisma.movie.findUnique({
      where: { id },
    });
  }

  create(dto: CreateMovieDto) {
    return this.prisma.movie.create({
      data: {
        title: dto.title,
        year: dto.year,
        rating: dto.rating,
        plot: dto.plot,
        posterUrl: dto.posterUrl,
        genres: {
          connect: dto.genreIds.map((id) => ({ id })),
        },
      },
      include: { genres: true },
    });
  }

  update(id: number, dto: UpdateMovieDto) {
    return this.prisma.movie.update({
      where: { id },
      data: {
        title: dto.title,
        year: dto.year,
        rating: dto.rating,
        plot: dto.plot,
        posterUrl: dto.posterUrl,
        genres: dto.genreIds
          ? { set: dto.genreIds.map((id) => ({ id })) }
          : undefined,
      },
      include: { genres: true },
    });
  }

  remove(id: number) {
    return this.prisma.movie.delete({
      where: { id },
    });
  }
}
