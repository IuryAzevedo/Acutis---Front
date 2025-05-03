import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConta } from '../../models/conta.model';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  private apiUrl = 'http://localhost:3000/contas'; // ajuste conforme seu backend

  constructor(private http: HttpClient) {}

  listar(): Observable<IConta[]> {
    return this.http.get<IConta[]>(this.apiUrl);
  }
}
