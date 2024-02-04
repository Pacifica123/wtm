import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.getUserData().subscribe(
      (user) =>{
        this.userData = user;
        
      },
      (e) =>{
        console.log('Ошибка запроса данных пользователя: ', e);
      }
    );
  }
}
