import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rota padrão
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: '**', redirectTo: '/login' } // Rota para páginas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
