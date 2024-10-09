import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AsideComponent } from '../../components/aside/aside.component';
import { UiService } from '../../../core/services/ui/ui.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [HeaderComponent, AsideComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent implements OnInit {
  private _uiService: UiService = inject(UiService);

  static originalMainWidth: number = 0;

  ngOnInit(): void {
    this.moveMainToLeftIfMenuIsClosed();
  }

  moveMainToLeftIfMenuIsClosed = (): void => {
    let asideMenu: HTMLElement = document.getElementsByTagName("aside")[0];
    let main: HTMLElement = document.getElementsByTagName("main")[0];

    let asideStyles: CSSStyleDeclaration = window.getComputedStyle(asideMenu);
    let asideMarginRight: number = parseInt(asideStyles.marginRight.slice(0, 2));

    let pxToTranslate: number = (-asideMenu.clientWidth + (-asideMarginRight));

    AdminLayoutComponent.originalMainWidth = main.clientWidth;

    if (!this._uiService.isMobile && localStorage.getItem('rd_menu') !== null && localStorage.getItem('rd_menu') === 'closed'){
      main.style.transition = "none";

      main.style.transform = `translateX(${pxToTranslate}px)`;
      main.style.width = `${main.clientWidth + asideMenu.clientWidth}px`;

      main.style.transition = "transform 800ms cubic-bezier(.8, 0, .33, 1), width 800ms cubic-bezier(.8, 0, .33, 1)";
    }
  }
}
