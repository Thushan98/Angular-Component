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
      category: 'Forms',
      children: [
        {
          id: 11,
          label: 'Single Form',
          routerLink: 'forms/single-form',
        },
        {
          id: 12,
          label: 'Array of Forms',
          routerLink: 'forms/formArray',
        },
      ],
    },
    {
      id: 2,
      label: 'Types',
      isActive: true,
      category: 'Types',
      icon: 'group_add',
      children: [
        {
          id: 21,
          label: 'Type 1',
          routerLink: 'types/type',
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
    {
      id: 3,
      label: 'Tables',
      isActive: true,
      icon: 'group_add',
      category: 'Tables',
      children: [
        {
          id: 31,
          label: 'Mat Table',
          routerLink: 'tables/mat-table',
        },
      ],
    },
    {
      id: 4,
      label: 'Groups',
      isActive: true,
      icon: 'group_add',
      category: 'Groups',
      children: [
        {
          id: 41,
          label: 'Group Box',
          routerLink: 'groups/grpBox',
        },
      ],
    },
    {
      id: 5,
      label: 'Uploader',
      isActive: true,
      icon: 'group_add',
      category: 'Uploaders',
      children: [
        {
          id: 51,
          label: 'File Uploader',
          routerLink: 'uploader/fileUpload',
        },
      ],
    },
    {
      id: 6,
      label: 'Charts',
      isActive: true,
      icon: 'group_add',
      category: 'Charts',
      children: [
        {
          id: 61,
          label: 'Bar Chart',
          routerLink: 'charts/barchart',
        },
        {
          id: 62,
          label: 'Line Chart',
          routerLink: 'charts/linechart',
        },
      ],
    },
  ];
}
