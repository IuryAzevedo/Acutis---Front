import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAgencia } from '../../models/agencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgenciaService {
  private API_URL = 'http://localhost:8080/agencia'; // ajuste se necessário

  constructor(private http: HttpClient) {}

  getAgencias(): Observable<IAgencia[]> {
    return this.http.get<IAgencia[]>(`${this.API_URL}/all`);
  }

  adicionarAgencia(agencia: IAgencia): Observable<any> {
    return this.http.post(`${this.API_URL}/nova`, agencia);
  }
}
