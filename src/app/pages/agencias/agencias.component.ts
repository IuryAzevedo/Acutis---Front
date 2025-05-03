import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agencias',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.scss']
})
export class AgenciasComponent {
  bancos = [
    { name: 'Banco Central', codigo: '001' },
    { name: 'Banco Estelar', codigo: '002' },
    { name: 'Banco Fictício', codigo: '003' }
  ];

  agencias = [
    { nome: 'Agência Alpha', codigo: '1001', banco: 'Banco Central', ativo: true },
    { nome: 'Agência Beta', codigo: '1002', banco: 'Banco Estelar', ativo: true },
    { nome: 'Agência Zeta', codigo: '1003', banco: 'Banco Fictício', ativo: false }
  ];

  novaAgencia = { nome: '', codigo: '', banco: '', ativo: true };

  adicionarAgencia() {
    if (this.novaAgencia.nome && this.novaAgencia.codigo && this.novaAgencia.banco) {
      this.agencias.push({ ...this.novaAgencia });
      this.novaAgencia = { nome: '', codigo: '', banco: '', ativo: true };
    }
  }

  desativarAgencia(agencia: any) {
    agencia.ativo = false;
  }
}
