import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/api/auth'; // ajuste conforme o seu backend

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    const body = { email, senha };
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}
