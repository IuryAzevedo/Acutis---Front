import { Injectable } from '@angular/core';
import { Transacao } from '../../models/transacao.model';


@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  private transacoes: Transacao[] = [];

  adicionarTransacao(transacao: Transacao): void {
    this.transacoes.push(transacao);
  }

  getTransacoes(): Transacao[] {
    return this.transacoes;
  }

  getTransacoesPorConta(contaId: string): Transacao[] {
    return this.transacoes.filter(
      (t) => t.contaOrigem === contaId || t.contaDestino === contaId
    );
  }

  getTransacoesPorData(data: Date): Transacao[] {
    const targetDate = new Date(data).toDateString();
    return this.transacoes.filter(
      (t) => new Date(t.data).toDateString() === targetDate
    );
  }
}
