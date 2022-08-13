import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt'; 
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {
    
  } 

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUser(email);
    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password
    );
    if (user && isPasswordMatch) {
      console.log("priting user");
      
      console.log(user);
      
      return user;
    }
    return null;
  }

  async login(user: any) {

    
    
    const payload = { email: user.email, sub: user._id, roles: user.accountType };
    console.log(payload);
     
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}