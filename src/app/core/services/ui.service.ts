import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor() { }

  // Get device type with Express

  isMobile: boolean = false;
  menuOpen: boolean = true;
}
