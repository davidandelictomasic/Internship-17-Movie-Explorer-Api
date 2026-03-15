import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.favorite.findMany({
      include: { movie: true },
    });
  }

  create(dto: CreateFavoriteDto) {
    return this.prisma.favorite.create({
      data: {
        movieId: dto.movieId,
      },
      include: { movie: true },
    });
  }

  remove(id: number) {
    return this.prisma.favorite.delete({
      where: { id },
    });
  }
}
