import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IHistorico } from "../../models/historico.model";
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class HistoricoService {
  private baseUrl = 'http://localhost:3000/historico';

  constructor(private http: HttpClient) {}

  listar(): Observable<IHistorico[]> {
    return this.http.get<IHistorico[]>(this.baseUrl);
  }

  registrar(historico: Partial<IHistorico>): Observable<IHistorico> {
    return this.http.post<IHistorico>(this.baseUrl, {
      ...historico,
      data: new Date()
    });
  }
}
