import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../components/banco/banco.service';
import { IBanco } from '../../models/banco.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.scss'],
  imports: [CommonModule, FormsModule
    
  ]
})
export class BancosComponent implements OnInit {
  bancos: IBanco[] = [];
  novoBanco: IBanco = { nome: '', dataFundacao: new Date().toISOString().split('T')[0] };

  constructor(private bancoService: BancoService) {}

  ngOnInit(): void {
    this.carregarBancos();
  }

  carregarBancos(): void {
    this.bancoService.getBancos().subscribe({
      next: (dados) => this.bancos = dados,
      error: (err) => console.error('Erro ao carregar bancos', err)
    });
  }

  adicionarBanco(): void {
    if (this.novoBanco.nome) {
      // Garante que a data tenha o formato esperado pelo backend
      this.novoBanco.dataFundacao = this.formatarDataParaISOComHora(new Date(this.novoBanco.dataFundacao));
  
      this.bancoService.adicionarBanco(this.novoBanco).subscribe({
        next: (bancoAdicionado) => {
          this.bancos.push(bancoAdicionado);
          this.novoBanco = { nome: '', dataFundacao: new Date().toISOString().split('T')[0] };
          this.carregarBancos(); 
        },
        error: (err) => console.error('Erro ao adicionar banco', err)
      });
    }
  }
  

  formatarDataParaISOComHora(data: Date): string {
    const yyyy = data.getFullYear();
    const mm = String(data.getMonth() + 1).padStart(2, '0');
    const dd = String(data.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}T00:00:00`;
  }
  
  atualizarDataFundacao(valor: string) {
    this.novoBanco.dataFundacao = valor + 'T00:00:00';
  }
  
  // desativarBanco(banco: IBanco): void {
  //   banco.ativo = false;
  //   this.bancoService.atualizarBanco(banco).subscribe({
  //     next: (bancoAtualizado) => {
  //       console.log('Banco desativado com sucesso:', bancoAtualizado);
  //     },
  //     error: (err) => {
  //       console.error('Erro ao desativar banco:', err);
  //       banco.ativo = true; 
  //     }
  //   });
  // }
}

