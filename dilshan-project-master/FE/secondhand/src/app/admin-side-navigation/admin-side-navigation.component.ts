// admin-side-navigation.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-side-navigation',
  templateUrl: './admin-side-navigation.component.html',
  styleUrls: ['./admin-side-navigation.component.scss']
})
export class AdminSideNavigationComponent {
  isCollapsed = false;
  showSubmenu: { [key: string]: boolean } = {
    dashboard: false,
    advertisement: false,
    chat: false,
    userComplaints: false,
    systemAnalysis: false,
    profilesetting: false
  };

  constructor() {}

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(section: string): void {
    // Close all other submenus
    Object.keys(this.showSubmenu).forEach(key => {
      if (key !== section) {
        this.showSubmenu[key] = false;
      }
    });

    // Toggle the selected submenu
    this.showSubmenu[section] = !this.showSubmenu[section];
  }

  showHoverMenu(section: string): void {
    // You can implement hover functionality if needed
  }

  hideHoverMenu(section: string): void {
    // You can implement hover functionality if needed
  }
}
