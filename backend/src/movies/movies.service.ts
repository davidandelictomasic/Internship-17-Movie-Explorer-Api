import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.movie.findMany({
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
}
