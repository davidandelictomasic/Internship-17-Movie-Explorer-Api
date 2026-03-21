import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(userId: number) {
    return this.prisma.favorite.findMany({
      where: { userId },
      include: { movie: true },
    });
  }

  create(dto: CreateFavoriteDto, userId: number) {
    return this.prisma.favorite.create({
      data: {
        movieId: dto.movieId,
        userId,
      },
      include: { movie: true },
    });
  }

  remove(id: number, userId: number) {
    return this.prisma.favorite.delete({
      where: { id, userId },
    });
  }
}
