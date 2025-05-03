import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  imports: [FormsModule, RouterModule, CommonModule],
  styleUrls: ['./bancos.component.scss']
})


export class BancosComponent {
  bancos = [
    { nome: 'Banco Central', codigo: '001', ativo: true },
    { nome: 'Banco Estelar', codigo: '002', ativo: true },
    { nome: 'Banco Fictício', codigo: '003', ativo: false }
  ];

  novoBanco = { nome: '', codigo: '', ativo: true };

  adicionarBanco() {
    if (this.novoBanco.nome && this.novoBanco.codigo) {
      this.bancos.push({ ...this.novoBanco });
      this.novoBanco = { nome: '', codigo: '', ativo: true };
    }
  }

  desativarBanco(banco: any) {
    banco.ativo = false;
  }
}
