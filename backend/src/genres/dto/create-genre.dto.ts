import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto {
  @ApiProperty({ example: 'Action' })
  name: string;
  @ApiProperty({ example: [1, 2] })
  movieIds: number[];
}

    