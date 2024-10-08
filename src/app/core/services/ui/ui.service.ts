import { InitService } from './../init/init.service';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor() { }

  isMobile: boolean | undefined;
  menuOpen: boolean | undefined;

  darkMode: boolean = localStorage.getItem("rd_theme") === null || localStorage.getItem("rd_theme") === "light" ? false : true;

  private darkModeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.darkMode);
  public darkModeState: Observable<boolean> = this.darkModeSubject.asObservable();

  toggleDarkModeState = (): void => {
    let currentState: boolean = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentState);
  }

  unsubscribeDarkMode = (): void => {
    this.darkModeSubject.complete();
  }
}
