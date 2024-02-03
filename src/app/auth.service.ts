import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Rust Backend api version 0
  private baseUrl = 'http://localhost:8080/rwtm/api/v0'

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Добавь Access-Control-Allow-Origin, если требуется
      'Access-Control-Allow-Origin': 'http://localhost:8080.',
    });
    //отправка данных на бэкенд
    return this.http.post(`${this.baseUrl}/register`, data, { headers: headers});
  }
}
