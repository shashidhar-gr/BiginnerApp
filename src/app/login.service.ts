import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable()
export class LoginService {
  successMessage: Object
  login(login: Login): Promise<any> {
    this.successMessage = {
      "success": true
    }
    return Promise.resolve(this.successMessage);
  }
}
