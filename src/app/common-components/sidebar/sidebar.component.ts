import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavItem } from '../sidenav/side-nav-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private readonly router: Router) {}

  items: Array<SideNavItem> = [
    {
      id: 1,
      label: 'Forms',
      isActive: true,
      icon: 'group_add',
      children: [
        {
          id: 11,
          label: 'Single Form',
          routerLink: 'forms/single-form'
        },
        {
          id: 12,
          label: 'Array of Forms',
          routerLink: 'forms/formArray'
        },
      ],
    },
    {
      id: 2,
      label: 'Types',
      isActive: true,
      category: '',
      icon: 'group_add',
      children: [
        {
          id: 21,
          label: 'Type 1',
          routerLink: 'types/type'
          // children: [
          //   {
          //     id: 211,
          //     label: 'Grand Child',
          //     onClick: () => {
          //       this.router.navigateByUrl('');
          //     },
          //   },
          // ],
        },
      ],
    },
  ];
}
