import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto, AuthRegisterDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() dto: AuthRegisterDto) {
    return this.authService.signup(dto);
  }

  @Post('/signin')
  signin(@Body() dto: AuthLoginDto) {
    return this.authService.signin(dto);
  }
}
