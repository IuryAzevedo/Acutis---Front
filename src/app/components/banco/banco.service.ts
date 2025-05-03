import { Injectable } from '@angular/core';
import { IBanco } from '../../models/banco.model';

@Injectable({
  providedIn: 'root',
})
export class BancoService {
  private bancos: IBanco[] = [];

  adicionarBanco(banco: IBanco): void {
    this.bancos.push(banco);
  }

  getBancos(): IBanco[] {
    return this.bancos;
  }

  getBancoPorId(id: number): IBanco | undefined {
    return this.bancos.find((b) => b.id === id);
  }
}
