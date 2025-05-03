import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class UsuariosComponent {
  novoUsuario: Usuario = { nome: '', email: '', senha: '' };
  usuarios: Usuario[] = [];

  adicionarUsuario() {
    if (
      this.novoUsuario.nome &&
      this.validarEmail(this.novoUsuario.email) &&
      this.novoUsuario.senha
    ) {
      this.usuarios.push({ ...this.novoUsuario });
      this.novoUsuario = { nome: '', email: '', senha: '' };
    } else {
      alert('Preencha os campos corretamente.');
    }
  }

  validarEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
