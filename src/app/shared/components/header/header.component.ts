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
    let main: HTMLElement = document.getElementsByTagName("main")[0];

    if (isMenuOpen){
      asideMenu.classList.toggle("open_menu");
      !this._uiService.isMobile ? this.moveMainToLeft(main, -asideMenu.clientWidth, asideMenu.clientWidth) : false;
      this._uiService.isMobile ? setTimeout(this.sendMainToFrontOrBack, 800, main, 50) : false;

    } else {
      asideMenu.classList.toggle("open_menu");
      !this._uiService.isMobile ? this.moveMainToLeft(main, 0, 0) : false;
      this.sendMainToFrontOrBack(main, 50);
    }

    this._uiService.menuOpen = !this._uiService.menuOpen;
    console.log(this._uiService.menuOpen);
  }

  moveMainToLeft = (mainElement: HTMLElement, pxToTranslate: number, asideWidth: number): void => {
    mainElement.style.transform = `translateX(${pxToTranslate}px)`;

    if (this.originalMainWidth === null) {
      this.originalMainWidth = mainElement.clientWidth;
    }
    mainElement.style.width = `${this.originalMainWidth + asideWidth}px`;
  }

  sendMainToFrontOrBack = (mainElement: HTMLElement, zIndex: number) => {
    mainElement.classList.toggle("z-50");
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
