import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Lógica de autenticação
    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);
  }
}
