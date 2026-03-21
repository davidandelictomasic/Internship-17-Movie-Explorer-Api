import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, UseGuards, Req } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { JwtAuthGuard } from '../users/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  findAll(@Req() req) {
    return this.favoritesService.findAll(req.user.id);
  }

  @Post()
  create(@Req() req, @Body() dto: CreateFavoriteDto) {
    return this.favoritesService.create(dto, req.user.id);
  }

  @Delete(':id')
  remove(@Req() req, @Param('id', ParseIntPipe) id: number) {
    return this.favoritesService.remove(id, req.user.id);
  }
}
