import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IBanco } from '../../models/banco.model';
import { BancoService } from '../../components/banco/banco.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class AgenciasComponent implements OnInit {
  bancos: IBanco[] = [];
  agencias: any[] = []; // ✅ Correção: propriedade declarada para uso no template
  novaAgencia = {
    nome: '',
    endereco: '',
    bancoId: 0,
    ativo: true,
  };

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private bancoService: BancoService) {}

  ngOnInit(): void {
    this.carregarBancos();
    this.carregarAgencias(); // opcional, se quiser listar agências ao iniciar
  }

  carregarBancos(): void {
    this.bancoService.getBancos().subscribe({
      next: (dados) => {
        this.bancos = dados;
      },
      error: (err) => {
        console.error('Erro ao carregar bancos:', err);
      },
    });
  }

  carregarAgencias(): void {
    this.http.get<any[]>(`${this.apiUrl}/agencia/all`).subscribe({
      next: (dados) => {
        this.agencias = dados; // ✅ Preenchendo a lista usada no template
      },
      error: (err) => {
        console.error('Erro ao carregar agências:', err);
      },
    });
  }

  adicionarAgencia(): void {
    const bancoSelecionado = this.bancos.find(
      (b) => b.id === this.novaAgencia.bancoId
    );

    if (!bancoSelecionado) {
      console.error('Banco selecionado inválido.');
      return;
    }

    const agenciaParaSalvar = {
      nome: this.novaAgencia.nome,
      endereco: this.novaAgencia.endereco,
      ativo: true,
      banco: bancoSelecionado,
    };

    this.http
      .post(`${this.apiUrl}/agencia/nova`, agenciaParaSalvar)
      .subscribe({
        next: () => {
          this.carregarAgencias();
          this.novaAgencia = {
            nome: '',
            endereco: '',
            bancoId: 0,
            ativo: true,
          };
        },
        error: (err) => {
          console.error('Erro ao cadastrar agência:', err);
        },
      });
  }
}
