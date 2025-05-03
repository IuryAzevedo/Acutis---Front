import { Injectable } from '@angular/core';
import { IConta } from '../../models/conta.model';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  private contas: IConta[] = [];


  adicionarConta(conta: IConta): void {
    this.contas.push(conta);
  }

  getContas(): IConta[] {
    return this.contas;
  }

  getContaPorId(id: number): IConta | undefined {
    return this.contas.find((c) => c.id === id);
  }

  getContasPorUsuario(usuarioId: number): IConta[] {
    return this.contas.filter((c) => c.usuarioId === usuarioId);
  }

  getContasPorAgencia(agenciaId: number): IConta[] {
    return this.contas.filter((c) => c.agenciaId === agenciaId);
  }
}
