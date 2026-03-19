import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genres.module';
import { FavoritesModule } from './favorites/favorites.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, MoviesModule, GenresModule, FavoritesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
