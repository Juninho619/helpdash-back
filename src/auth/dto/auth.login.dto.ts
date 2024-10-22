import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class AuthLoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'email', example: 'neo@matrix.fr'  })
  email: string;

  @ApiProperty({ type: String, description: 'password', example: 'AAaa11&&&&' })
  @IsString()
  @IsNotEmpty()
  password: string;

  // isActive: boolean
}