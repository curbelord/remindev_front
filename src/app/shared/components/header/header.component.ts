import { SplitButtonModule } from 'primeng/splitbutton';
import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BadgeModule } from 'primeng/badge';
import { RouterLink, RouterModule } from '@angular/router';
import { UiService } from '../../../core/services/ui/ui.service';
import { Subscription } from 'rxjs';
import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SplitButtonModule, AvatarModule, BreadcrumbModule, BadgeModule, RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  private _uiService = inject(UiService);

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  darkModeSubscription!: Subscription;
  actualTheme: boolean = this._uiService.darkMode;

  menuOpenSubscription!: Subscription;
  actualMenuState: boolean = this._uiService.menuOpen;

  ngOnInit(): void {
    this.darkModeSubscription = this._uiService.darkModeState.subscribe({
      next: (state: boolean) => {
        this.actualTheme = state;
      }
    });

    this.menuOpenSubscription = this._uiService.menuOpenState.subscribe({
      next: (state: boolean) => {
        this.actualMenuState = state;
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.body.classList.contains('dark')) this.logoToWhite();
  }

  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
    this.menuOpenSubscription.unsubscribe();
  }

  manageMenu = (): void => {
    let asideMenu: HTMLElement = document.getElementsByTagName("aside")[0];
    let main: HTMLElement = document.getElementsByTagName("main")[0];

    let asideStyles: CSSStyleDeclaration = window.getComputedStyle(asideMenu);
    let asideMarginRight: number = parseInt(asideStyles.marginRight.slice(0, 2));

    asideMenu.classList.toggle("open_menu");
    let openOrClosed: string = "";

    if (this.actualMenuState){
      !this._uiService.isMobile ? this.moveMainToLeft(main, (-asideMenu.clientWidth + (-asideMarginRight)), asideMenu.clientWidth) : false;
      this._uiService.isMobile ? setTimeout(this.sendMainToFrontOrBack, 800, main) : false;
      openOrClosed = "closed";

    } else {
      !this._uiService.isMobile ? this.moveMainToLeft(main, 0, 0) : false;
      this.sendMainToFrontOrBack(main);
      openOrClosed = "open";
    }

    localStorage.setItem('rd_menu', openOrClosed);
    this._uiService.toggleMenuOpenState();
  }

  moveMainToLeft = (mainElement: HTMLElement, pxToTranslate: number, asideWidth: number): void => {
    mainElement.style.transform = `translateX(${pxToTranslate}px)`;
    mainElement.style.width = `${AdminLayoutComponent.originalMainWidth + asideWidth}px`;
  }

  sendMainToFrontOrBack = (mainElement: HTMLElement) => {
    mainElement.classList.toggle("z-50");
  }

  getAvatarItemsToSplitterPC = (): MenuItem[] => {
    return this.avatarItems.slice(0, 1).concat(this.avatarItems.slice(3, 4));
  }

  readonly avatarItems: MenuItem[] = [{label: "Profile"}, {label: "Notifications"}, {label: `Theme: ${this.body.classList.contains('dark') ? 'dark' : 'light'}`, command: () => this.changeTheme()}, {label: "Logout"}];

  breadCrumbItems: MenuItem[] | undefined;

  notifications: number = 0;

  themeIcons: string[] = this.actualTheme ? ["moon", "sun"] : ["sun", "moon"];

  changeTheme = (): void => {
    this.themeIcons = this.themeIcons.reverse();
    this.body.classList.toggle('dark');
    this._uiService.toggleDarkModeState();

    if (this.body.classList.contains('dark')){
      localStorage.setItem('rd_theme', 'dark');
    }else{
      localStorage.setItem('rd_theme', 'light');
    }

    this.logoToWhite();
    this.avatarItems[2].label = `Theme: ${this.body.classList.contains('dark') ? 'dark' : 'light'}`;
  }

  logoToWhite = (): void => {
    const svgCls3Elements: NodeListOf<SVGElement> = document.querySelectorAll('.cls-3');

    svgCls3Elements.forEach(element => {
      element.style.fill != "rgb(255, 255, 255)" ? element.style.fill = "#ffffff" : element.style.fill = "#1d1d1b";
    });
  }


  // Add elements to the breadCrumb

  // this.breadCrumbItems = [{ label: 'InputText', route: '/inputtext' }, { label: 'InputText', route: '/inputtext' }, { label: 'InputText', route: '/inputtext', active: true }];
}
