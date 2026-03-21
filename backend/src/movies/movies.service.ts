import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(search?: string, sort?: string, genre?: string, order?: string) {
    const direction = order === 'asc' ? 'asc' : 'desc';

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
        ? { title: direction }
        : sort === 'rating'
          ? { rating: direction }
          : sort === 'release_date'
            ? { year: direction }
            : undefined,
      include: { genres: true },
    });
  }

  async findOne(id: number) {
    const movie = await this.prisma.movie.findUnique({
      where: { id },
      include: { genres: true },
    });

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    return movie;
  }

  create(dto: CreateMovieDto) {
    if (!dto.title) {
      throw new BadRequestException('Title is required');
    }
    if (!dto.year || isNaN(dto.year)) {
      throw new BadRequestException('Year must be a valid number');
    }
    if (dto.rating < 0 || dto.rating > 10) {
      throw new BadRequestException('Rating must be between 0 and 10');
    }

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
