import { inject, Injectable } from '@angular/core';
import { UiService } from '../ui/ui.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private _uiService = inject(UiService);

  constructor() { }

  public getDeviceType = (): void => {
    let viewportWidth: number = document.documentElement.clientWidth;
    let screenOrientation: string = screen.orientation.type;

    if (screenOrientation.includes("landscape") && viewportWidth >= 1024){
      this._uiService.isMobile = false;
      this._uiService.menuOpen = true;
    }else{
      this._uiService.isMobile = true;
      this._uiService.menuOpen = false;
    }
  }

  public changeThemeInBody = (): void => {
    const body: HTMLBodyElement = document.getElementsByTagName('body')[0];

    if (this._uiService.darkMode){
      body.classList.add('dark');
      localStorage.setItem('rd_theme', 'dark');
      return;
    }

    localStorage.setItem('rd_theme', 'light');
  }
}
