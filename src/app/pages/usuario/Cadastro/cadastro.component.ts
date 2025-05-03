import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  imports: [FormsModule, RouterModule], 
})
export class CadastroComponent {
  nome = '';
  email = '';
  senha = '';

  constructor(private router: Router) {}

  cadastrar() {
    // Aqui você pode integrar com seu AuthService futuramente
    if (this.nome && this.email && this.senha) {
      this.router.navigate(['/login']);
    }
  }
}
