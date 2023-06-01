import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { Observable } from 'rxjs';

import { AuthGuard } from '@app/shared';
import { ExistingUserDTO, NewUserDTO } from './dtos/app.dto';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private authService: ClientProxy,
    @Inject('PRESENCE_SERVICE') private readonly presenceService: ClientProxy,
  ) {}

  @Get()
  async foo() {
    return { foo: 'bar!' };
  }

  @Get('auth')
  async getUsers(): Promise<Observable<any>> {
    return this.authService.send(
      {
        cmd: 'get-users',
      },
      {},
    );
  }

  @Post('auth')
  async postUser() {
    return this.authService.send(
      {
        cmd: 'post-user',
      },
      {},
    );
  }

  @UseGuards(AuthGuard)
  @Get('presence')
  async getPresence() {
    return this.presenceService.send(
      {
        cmd: 'get-presence',
      },
      {},
    );
  }

  @Post('auth/register')
  async register(@Body() newUser: NewUserDTO) {
    return this.authService.send(
      {
        cmd: 'register',
      },
      newUser,
    );
  }

  @Post('auth/login')
  async login(@Body() existingUser: ExistingUserDTO) {
    return this.authService.send(
      {
        cmd: 'login',
      },
      existingUser,
    );
  }
}
