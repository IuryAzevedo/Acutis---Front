import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBanco } from '../../models/banco.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BancoService {
  private apiUrl = `${environment.apiUrl}/banco`;

  constructor(private http: HttpClient) {}

  getBancos(): Observable<IBanco[]> {
    return this.http.get<IBanco[]>(`${this.apiUrl}/all`);
  }
  adicionarBanco(banco: IBanco): Observable<IBanco> {
    return this.http.post<IBanco>(`${this.apiUrl}/novo`, banco);
  }
}

 
  // getBancoPorId(id: number): Observable<IBanco> {
  //   return this.http.get<IBanco>(`${this.apiUrl}/${id}`);
  // }

  // atualizarBanco(banco: IBanco): Observable<IBanco> {
  //   return this.http.put<IBanco>(`${this.apiUrl}/${banco.id}`, banco);
  // }

  // removerBanco(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
// }
