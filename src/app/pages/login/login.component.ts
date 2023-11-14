import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  routeUrl: any = ''
  email!: string;
  password!: string;

  constructor(
    private router: Router
  ) {}

  login() {
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    // Exemplo: autenticação simulada, normalmente feita por meio de serviços ou APIs
    if (this.email === 'seuemail@example.com' && this.password === 'suasenha') {
      console.log('Usuário autenticado!');
      // Navegação para outra rota após login bem-sucedido
      // this.router.navigate(['/outra-rota']);
    } else {
      console.log('Falha na autenticação. Verifique suas credenciais.');
    }
  }
  navegateToHome(): void {
    this.router.navigate(['/home'])  
  }
}
