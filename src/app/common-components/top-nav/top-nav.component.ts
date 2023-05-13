import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  constructor(private router: Router) {}

  onLoginButtonClick() {
    this.router.navigate(['/login']);
  }

  tabs = [
    {
      name: 'Home',
      link: '/home',
    },
    {
      name: 'Carear',
      link: '/carear',
    },
    {
      name: 'Tab1',
      link: '/tab1',
    },
  ];
}
