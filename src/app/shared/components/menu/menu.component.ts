import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit(){
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',

      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-phone',
      }
    ];
  }

}
