import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';

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
    this.loginService.login(this.model).then(function(response) {

      if(response.success) {
        this.model = new Login('', '');
      } 
      else {

      }

    })
    .catch(function(error) {

    });
  }
  get diagnostic() { return JSON.stringify(this.model); }
}
