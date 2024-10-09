import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor() { }

  isMobile: boolean = screen.orientation.type.includes("landscape") && document.documentElement.clientWidth >= 1024 ? false : true;
  menuOpen: boolean = localStorage.getItem("rd_menu") === null || localStorage.getItem("rd_menu") === "closed" ? false : true;

  private menuOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.menuOpen);
  public menuOpenState: Observable<boolean> = this.menuOpenSubject.asObservable();

  toggleMenuOpenState = (): void => {
    let currentState: boolean = this.menuOpenSubject.value;
    this.menuOpenSubject.next(!currentState);
  }

  darkMode: boolean = localStorage.getItem("rd_theme") === null || localStorage.getItem("rd_theme") === "light" ? false : true;

  private darkModeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.darkMode);
  public darkModeState: Observable<boolean> = this.darkModeSubject.asObservable();

  toggleDarkModeState = (): void => {
    let currentState: boolean = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentState);
  }
}
