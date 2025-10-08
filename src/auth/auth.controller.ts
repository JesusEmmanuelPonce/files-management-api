import { Controller, Post, Body } from '@nestjs/common';

import { LoginDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }
}
