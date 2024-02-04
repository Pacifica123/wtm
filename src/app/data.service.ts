import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/rwtm/api/v0';

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any>{
    // тест
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(`${this.apiUrl}/userinfo`, { headers });

  }

  getProfileData(){
    // заглушка на будущее
  }

  getTaskboards(){
    // заглушка на будущее
  }
}
