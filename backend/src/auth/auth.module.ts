import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { SECRET_KEY } from '../config';
import { JwtStrategy } from './strat/jwt.strat';
import { LocalStrategy } from './strat/local.strat';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({

    secret: SECRET_KEY,
    signOptions: { expiresIn: '3600s' },
  }),],
  providers: [AuthService,LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
