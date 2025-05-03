import { Component, OnInit } from '@angular/core'; // Certifique-se de importar Component
import { IHistorico } from '../../models/historico.model';
import { HistoricoService } from './historico.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class HistoricoComponent implements OnInit {
  historico: IHistorico[] = [];
  filtro = '';

  constructor(private historicoService: HistoricoService) {}

  ngOnInit() {
    this.historicoService.listar().subscribe(dados => this.historico = dados);
  }

  historicoFiltrado() {
    return this.historico.filter(h =>
      h.usuario.toLowerCase().includes(this.filtro.toLowerCase()) ||
      h.acao.toLowerCase().includes(this.filtro.toLowerCase()) ||
      h.entidade.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
