import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentLayout: string = 'login';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const routeData = event.url;
        //Condicional para definir o layout com base na URL
        if (routeData === '/') {
          this.currentLayout = 'login'; //Definir o layout de login para a rota raiz
        } else if (routeData === '/login') {
          this.currentLayout = 'login';
        } else {
          this.currentLayout = 'home';
        }
      }
    });

    // Simulação de um login bem-sucedido (depois que a autenticação for validada)
    if (this.authService.isLoggedIn()) {
      this.successfulLogin();
    }
  }
  // Após o login ser bem-sucedido, alterar o layout para 'main'
  successfulLogin() {
    this.currentLayout = 'home';
  }
}
