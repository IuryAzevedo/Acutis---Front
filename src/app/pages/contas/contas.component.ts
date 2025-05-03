import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Conta {
  usuario: string;
  agencia: string;
  tipo: 'Corrente' | 'Poupança' | 'Salário';
  limiteCredito?: number;
  rendimentoMensal?: number;
  cnpjEmpresa?: string;
}

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ContasComponent {
  novaConta: Conta = {
    usuario: '',
    agencia: '',
    tipo: 'Corrente'
  };

  contas: Conta[] = [];

  adicionarConta() {
    if (this.novaConta.usuario && this.novaConta.agencia && this.novaConta.tipo) {
      const contaExistente = this.contas.find(
        c => c.usuario === this.novaConta.usuario && c.agencia === this.novaConta.agencia
      );

      if (contaExistente) {
        alert('Este usuário já possui uma conta nesta agência.');
        return;
      }

      this.contas.push({ ...this.novaConta });

      this.novaConta = {
        usuario: '',
        agencia: '',
        tipo: 'Corrente'
      };
    } else {
      alert('Preencha os campos obrigatórios.');
    }
  }
}
