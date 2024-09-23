import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor() { }

  isMobile: boolean | undefined;
  menuOpen: boolean | undefined;

  darkMode: boolean | undefined;
}
