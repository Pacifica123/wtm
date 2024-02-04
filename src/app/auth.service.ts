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

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // Добавь Access-Control-Allow-Origin, если требуется
    'Access-Control-Allow-Origin': 'http://localhost:8080.',
  });

  register(data: any): Observable<any>{
    console.log(data);
    return this.http.post(`${this.baseUrl}/register`, data, { headers: this.headers});
  }

  login(data: any): Observable<any>{
    console.log(data);
    return this.http.post(`${this.baseUrl}/login`, data, { headers: this.headers});
  }
}
