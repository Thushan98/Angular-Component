import { Component } from '@angular/core';
import { SideNavItem } from './side-nav-item';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  items: Array<SideNavItem> = [
    {
      id: 0,
      label: 'Higher',
      isActive: true,
      icon: 'group_add',
      children: [
        {
          id: 11,
          label: 'Undergraduate',
          onClick: () => {
            this.router.navigateByUrl('under');
          },
          children: [
            {
              id: 111,
              label: '1st',
              onClick: ()=> {
                this.router.navigateByUrl('1st');
              }
            }
          ]
        }
      ]
    },
    {
      id: 1,
      label: 'gfgfg',
      isActive: true,
      icon: 'group_add',
      children: [
        {
          id: 21,
          label: 'Undergraduate',
          onClick: () => {
            this.router.navigateByUrl('under');
          },
          children: [
            {
              id: 211,
              label: '1st',
              onClick: ()=> {
                this.router.navigateByUrl('1st');
              }
            }
          ]
        }
      ]
    }

  ];
  constructor (private readonly router: Router) {}
}
