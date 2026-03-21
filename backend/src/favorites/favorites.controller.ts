import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, UseGuards } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { JwtAuthGuard } from '../users/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  findAll() {
    return this.favoritesService.findAll();
  }

  @Post()
  create(@Body() dto: CreateFavoriteDto) {
    return this.favoritesService.create(dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.favoritesService.remove(id);
  }
}
