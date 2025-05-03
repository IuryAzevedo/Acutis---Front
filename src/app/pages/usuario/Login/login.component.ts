import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // ✅ Importando FormsModule aqui
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  senha = '';
  constructor(private loginService: LoginService,
     private router: Router) {}

     irParaCadastro() : void {
      this.router.navigate(['/cadastro']);
     }
     irParaDashboard() : void {
      this.router.navigate(['/dashboard'])
     }

  login() {
    console.log('Login com:', this.email, this.senha);
    this.loginService.login(this.email, this.senha).subscribe({
        next: (res) => {
          console.log('Login bem-sucedido', res);
          // redirecionar, salvar token etc.
        },
        error: (err) => {
          console.error('Erro ao logar', err);
        }
      });
  }
}
