import { Component, ElementRef, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  titleText = "Bem Vindo!";
  subtitleText = "-Sistema para exemplificar a construção de um cadastro de produto com Angular-";
  typedTitle = "";
  typedSubtitle = "";
  charIndexTitle = 0;
  charIndexSubtitle = 0;

  constructor(private headerService: HeaderService, private renderer: Renderer2, private el: ElementRef) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
    // Inicializações que não afetam o DOM, podem permanecer no ngOnInit
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.typeTitleAndSubtitle();
    }, 0);
  }

  typeTitleAndSubtitle() {
    const maxIndex = Math.max(this.titleText.length, this.subtitleText.length);
    const interval = setInterval(() => {
      if (this.charIndexTitle < this.titleText.length) {
        this.typedTitle += this.titleText.charAt(this.charIndexTitle);
        this.charIndexTitle++;
      }
      if (this.charIndexSubtitle < this.subtitleText.length) {
        this.typedSubtitle += this.subtitleText.charAt(this.charIndexSubtitle);
        this.charIndexSubtitle++;
      }
      if (this.charIndexTitle >= this.titleText.length && this.charIndexSubtitle >= this.subtitleText.length) {
        clearInterval(interval);
      }
    }, 80);
  }
}
