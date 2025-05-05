// import { Injectable } from '@angular/core';
// import { IUsuario } from '../../models/usuario.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class UsuarioService {
//   private usuarios: IUsuario[] = [];

//   adicionarUsuario(usuario: IUsuario): void {
//     this.usuarios.push(usuario);
//   }

//   getUsuarios(): IUsuario[] {
//     return this.usuarios;
//   }

// //   getUsuarioPorId(id: number): IUsuario | undefined {
// //     return this.usuarios.find((u) => u.id === id);
// //   }

//   getUsuarioPorEmail(email: string): IUsuario | undefined {
//     return this.usuarios.find((u) => u.email === email);
//   }

//   getUsuarioPorUsuario(usuario: string): IUsuario | undefined {
//     return this.usuarios.find((u) => u.usuario === usuario);
//   }

//   autenticar(usuario: string, senha: string): IUsuario | undefined {
//     return this.usuarios.find((u) => u.usuario === usuario && u.senha === senha);
//   }
// }
// src/app/core/services/usuario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly API = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) {}

  criarUsuario(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${this.API}/novo`, usuario);
  }

  listarUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${this.API}/all`);
  }
}
