import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor() { }

  // Get device type with Express

  isMobile: boolean = true;
  menuOpen: boolean = !this.isMobile;
}
