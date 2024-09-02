import { SplitButtonModule } from 'primeng/splitbutton';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BadgeModule } from 'primeng/badge';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SplitButtonModule, AvatarModule, BreadcrumbModule, BadgeModule, RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  manageMenu = () => {

  }

  getAvatarItemsToSplitterPC = (): MenuItem[] => {
    return this.avatarItems.slice(0, 1).concat(this.avatarItems.slice(3, 4));
  }

  // Add "command" parameter to call a function to logout

  readonly avatarItems: MenuItem[] = [{label: "Profile"}, {label: "Notifications"}, {label: `Theme: ${""}`}, {label: "Logout"}];

  breadCrumbItems: MenuItem[] | undefined;

  notifications: number = 0;

  theme: string[] = ["sun", "moon"];

  changeTheme = (): void => {
    this.theme = this.theme.reverse();

    // Add logical change
  }


  // Add elements to the breadCrumb

  // this.breadCrumbItems = [{ label: 'InputText', route: '/inputtext' }, { label: 'InputText', route: '/inputtext' }, { label: 'InputText', route: '/inputtext', active: true }];
}
