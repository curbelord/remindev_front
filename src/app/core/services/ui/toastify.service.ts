import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

@Injectable({
  providedIn: 'root'
})
export class ToastifyService {

  constructor() { }

  public showToast(message: string, duration: number = 3000, styleClass: string) {
    Toastify({
      text: message,
      duration: duration,
      close: true,
      stopOnFocus: true,
      className: styleClass,
      gravity: "top",
      position: "right",
    }).showToast();
  }
}
