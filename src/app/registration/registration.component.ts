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


  register() {
    // Собираем данные из формы в userData
    this.userData.username = (document.getElementById('username') as HTMLInputElement).value;
    this.userData.email = (document.getElementById('email') as HTMLInputElement).value;
    this.userData.password = (document.getElementById('password') as HTMLInputElement).value;
    this.userData.confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;

    console.log('Входные данные: ', this.userData);
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
