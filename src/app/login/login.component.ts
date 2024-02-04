import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService, private router: Router){}

  login(){
    this.loginData.email = (document.getElementById('email') as HTMLInputElement).value;
    this.loginData.password = (document.getElementById('password') as HTMLInputElement).value;

    this.auth.login(this.loginData).subscribe(
      (responce) => {
        console.log('Вход! Token:', responce);
        localStorage.setItem('token', responce.message );
        console.log(localStorage.getItem('token'));
        
        this.router.navigate(['/']);
      },
      (e) => {
        console.error('Ошибка входа: ', e)
      }
    );

  }
}
