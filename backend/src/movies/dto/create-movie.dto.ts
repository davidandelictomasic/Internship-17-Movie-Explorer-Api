import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({ example: 'The Dark Knight' })
  title: string;

  @ApiProperty({ example: 2008 })
  year: number;

  @ApiProperty({ example: 9.0 })
  rating: number;

  @ApiProperty({ example: 'When the menace known as the Joker wreaks havoc...' })
  plot: string;

  @ApiProperty({ example: 'https://example.com/poster.jpg' })
  posterUrl: string;

  @ApiProperty({ example: [1, 2], description: 'Array of genre IDs' })
  genreIds: number[];
}
