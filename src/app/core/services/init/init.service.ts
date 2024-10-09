import { inject, Injectable } from '@angular/core';
import { UiService } from '../ui/ui.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private _uiService = inject(UiService);

  constructor() { }

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
