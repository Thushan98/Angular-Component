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
      id: 0,
      label: 'Forms',
      isActive: true,
      category: 'Category 1',
      icon: 'group_add',
      children: [
        {
          id: 11,
          label: 'Single form',
          onClick: () => {
            this.router.navigateByUrl('forms/single-form');
          }
        },
        {
          id: 12,
          label: 'Child Tab 1',
          onClick: () => {
            this.router.navigateByUrl('');
          },
          children: [
            {
              id: 111,
              label: 'Grand Child 1',
              onClick: () => {
                this.router.navigateByUrl('');
              },
            },
          ],
        },
      ],
    },
    {
      id: 1,
      label: 'Parent Tab 2',
      isActive: true,
      category: 'category2',
      icon: 'group_add',
      children: [
        {
          id: 21,
          label: 'Child 1',
          onClick: () => {
            this.router.navigateByUrl('');
          },
          children: [
            {
              id: 211,
              label: 'Grand Child',
              onClick: () => {
                this.router.navigateByUrl('');
              },
            },
          ],
        },
      ],
    },
  ];
}
