import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { 

  isMobile: boolean = false; 

  constructor(private breakpointObserver: BreakpointObserver){ }

  ngOnInit(): void { 
    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait]).subscribe(result =>{
        this.isMobile = result.matches;
      });
  }
}