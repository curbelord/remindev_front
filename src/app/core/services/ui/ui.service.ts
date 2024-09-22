import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor() { }

  isMobile: boolean = true;
  menuOpen: boolean = !this.isMobile;
}
