import { Component } from '@angular/core';
import { LoginService } from './login.service';

class Login {
  constructor( public name: string, public password: string){ }
}

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  providers: [ LoginService ]
})
export class LoginComponent {
  constructor(private loginService: LoginService) { }
  model = new Login('', '');
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.model = new Login('', '');
  }
  get diagnostic() { return JSON.stringify(this.model); }
}
