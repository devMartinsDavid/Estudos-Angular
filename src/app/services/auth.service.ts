// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus: boolean = false;

  constructor() {
    // Simular o status de login
    // Por padrão, o usuário não está logado ao iniciar o serviço
    this.isLoggedInStatus = false;
  }
  // Verifica se o usuário está logado
  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
    
  }
  // Simula um login bem-sucedido
  login() {
    // Aqui você poderia realizar a lógica real de autenticação
    // Por exemplo, fazer uma solicitação HTTP para verificar as credenciais do usuário
    // Neste exemplo, estamos apenas definindo a variável isLoggedInStatus como true
    this.isLoggedInStatus = true;
  }
  // Simula um logout do usuário
  logout() {
    // Aqui você poderia realizar a lógica de logout real, se necessário
    this.isLoggedInStatus = false;
  }
}
