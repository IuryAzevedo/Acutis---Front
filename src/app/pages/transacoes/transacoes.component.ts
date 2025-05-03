import { Component, OnInit } from '@angular/core';
import { IConta } from '../../models/conta.model';
import { TransacaoService } from './transacao.service';
import { ContaService } from '../contas/conta.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss'],
  imports: [
    FormsModule, 
    BrowserModule,
  ]
})
export class TransacoesComponent implements OnInit {
  contas: IConta[] = [];
  transacoes: any[] = [];

  transacao = {
    contaOrigem: '',
    contaDestino: '',
    valor: 0,
    data: new Date()
  };

  constructor(
    private contaService: ContaService,
    private transacaoService: TransacaoService
  ) {}

  ngOnInit(): void {
    this.carregarContas();
    this.carregarTransacoes();
  }

  carregarContas() {
    this.contaService.listar().subscribe(contas => this.contas = contas);
  }

  carregarTransacoes() {
    this.transacaoService.listar().subscribe(t => this.transacoes = t);
  }

  realizarTransacao() {
    const origem = this.contas.find(c => c.id === +this.transacao.contaOrigem);
    const destino = this.contas.find(c => c.id === +this.transacao.contaDestino);

    if (!origem || !destino) {
      alert("Contas inválidas.");
      return;
    }

    if (origem.saldo < this.transacao.valor) {
      alert("Saldo insuficiente.");
      return;
    }

    this.transacaoService.realizar(this.transacao).subscribe(() => {
      alert("Transação realizada com sucesso.");
      this.carregarContas();
      this.carregarTransacoes();
    });
  }
}
