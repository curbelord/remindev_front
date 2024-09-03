import { SplitButtonModule } from 'primeng/splitbutton';
import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BadgeModule } from 'primeng/badge';
import { RouterLink, RouterModule } from '@angular/router';
import { UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SplitButtonModule, AvatarModule, BreadcrumbModule, BadgeModule, RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private _uiService = inject(UiService);
  originalMainWidth: number | null = null;

  manageMenu = (): void => {
    let isMenuOpen: boolean = this._uiService.menuOpen;
    let asideMenu: HTMLElement = document.getElementsByTagName("aside")[0];

    if (isMenuOpen){
      this._uiService.menuOpen = false;
      asideMenu.classList.toggle("open_menu");
      !this._uiService.isMobile ? this.moveMainToLeft(-asideMenu.clientWidth, asideMenu.clientWidth) : false;

    } else {
      this._uiService.menuOpen = true;
      asideMenu.classList.toggle("open_menu");
      !this._uiService.isMobile ? this.moveMainToLeft(0, 0) : false;
    }
  }

  moveMainToLeft = (pxToTranslate: number, asideWidth: number): void => {
    let main: HTMLElement = document.getElementsByTagName("main")[0];
    main.style.transform = `translateX(${pxToTranslate}px)`;

    if (this.originalMainWidth === null) {
      this.originalMainWidth = main.clientWidth;
    }
    main.style.width = `${this.originalMainWidth + asideWidth}px`;
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
