import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
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
