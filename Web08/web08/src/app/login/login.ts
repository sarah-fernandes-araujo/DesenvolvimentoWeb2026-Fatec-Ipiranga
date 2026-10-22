import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  email: string = '';
  senha: string = '';

  entrar() {
    console.log('Email:', this.email);
    console.log('Senha preenchida:', this.senha.length > 0);
  }

}
