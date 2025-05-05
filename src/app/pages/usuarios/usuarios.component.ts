// src/app/pages/usuarios/usuarios.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUsuario } from '../../models/usuario.model';
import { UsuarioService } from '../../components/usuario/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class UsuariosComponent implements OnInit {
  novoUsuario: Partial<IUsuario> = {
    nome: '',
    email: '',
    senha: '',
    usuario: '',
    endereco: ''
  };
  usuarios: IUsuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe({
      next: (data) => (this.usuarios = data),
      error: (err) => console.error('Erro ao carregar usuários:', err),
    });
  }

  adicionarUsuario() {
    const { nome, email, senha } = this.novoUsuario;
    if (nome && this.validarEmail(email!) && senha) {
      this.usuarioService.criarUsuario(this.novoUsuario as IUsuario).subscribe({
        next: () => {
          this.novoUsuario = {
            nome: '',
            email: '',
            senha: '',
            usuario: '',
            endereco: ''
          };
          this.carregarUsuarios(); // Atualiza a lista sem reload
        },
        error: (err) => alert('Erro ao cadastrar usuário: ' + err.message),
      });
    } else {
      alert('Preencha os campos corretamente.');
    }
  }

  validarEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
