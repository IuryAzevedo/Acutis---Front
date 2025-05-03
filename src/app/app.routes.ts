import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/usuario/Login/login.component';
import { CadastroComponent } from './pages/usuario/Cadastro/cadastro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BancosComponent } from './pages/bancos/bancos.component';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ContasComponent } from './pages/contas/contas.component';
import { TransacoesComponent } from './pages/transacoes/transacoes.component';
import { HistoricoComponent } from './pages/historico/historico.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent},
  {path: 'dashboard', component: DashboardComponent, 
    children: [
      {path: 'bancos', component: BancosComponent, },
      {path: 'agencias', component: AgenciasComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'contas', component: ContasComponent},
      {path: 'transacoes', component: TransacoesComponent},
      {path: 'historico', component: HistoricoComponent}
    ]
  }
  // outras rotas como /cadastro, /dashboard virão depois
  
];
