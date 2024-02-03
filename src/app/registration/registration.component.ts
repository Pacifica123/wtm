import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private auth: AuthService){}


  register(){
    this.auth.register(this.userData).subscribe(
      (responce) => {
        console.log('Успешная регистрация! ', responce);
      },
      (e) => {
        console.error('Ошибка регистрации: ', e)
      }
    );
  }
}
