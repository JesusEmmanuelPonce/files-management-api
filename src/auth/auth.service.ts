import { compare } from 'bcrypt';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { User } from 'src/users/entities/user.entity';
import { LoginDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private jwtService: JwtService
  ) {}


  async login(data: LoginDto) {

     const { user, password } = data;
     const userFound = await this.usersRepository.findOneBy({ user });

    if (!userFound) throw new HttpException('Verifique su email', HttpStatus.NOT_FOUND);

    const isPassword = await compare(password, userFound.password);

    if (!isPassword) throw new HttpException('Verifique sus credenciales', HttpStatus.FORBIDDEN);

    const payload = {
      id: userFound.id,
      name: userFound.name
    }

    const token = this.jwtService.sign(payload)

    return {
      token,
    }
  }
}
