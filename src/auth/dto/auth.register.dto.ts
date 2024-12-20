import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class AuthRegisterDto {
  @ApiProperty({
    type: String,
    description: 'FirstName',
    example: 'Thomas',
  })
  @MinLength(1)
  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'Last Name',
    example: 'Anderson',
  })
  @MinLength(1)
  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    type: String,
    description: 'Pseudo',
    example: 'Néo',
  })
  
  @ApiProperty({
    type: String,
    description: 'email',
    example: 'neo@matrix.fr',
  })
  @MaxLength(255)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'password',
    example: 'AAaa11&&&&',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}