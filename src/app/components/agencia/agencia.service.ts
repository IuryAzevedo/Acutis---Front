import { Injectable } from '@angular/core';
import { IAgencia } from '../../models/agencia.model';

@Injectable({
  providedIn: 'root',
})
export class AgenciaService {
  private agencias: IAgencia[] = [];

  adicionarAgencia(agencia: IAgencia): void {
    this.agencias.push(agencia);
  }

  getAgencias(): IAgencia[] {
    return this.agencias;
  }

  getAgenciaPorId(id: number): IAgencia | undefined {
    return this.agencias.find((a) => a.id === id);
  }

  getAgenciasPorBanco(bancoId: number): IAgencia[] {
    return this.agencias.filter((a) => a.bancoId === bancoId);
  }
}
