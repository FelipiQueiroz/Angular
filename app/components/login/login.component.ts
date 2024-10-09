import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onLogin(): void {
    // Aqui você pode adicionar lógica de autenticação
    // Para este exemplo, vamos redirecionar diretamente para a tela principal
    if (this.username && this.password) {
      this.router.navigate(['/principal']);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}

