import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UiService } from '../../../core/services/ui/ui.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent implements OnInit {
  private _uiService = inject(UiService);

  readonly menuButtons: {id: number, name: string, route: string}[] = [{id: 1, name: "Dashboard", route: "/dashboard"}, {id: 2, name: "Projects", route: "/projects"}, {id: 3, name: "Teams", route: "/teams"}, {id: 4, name: "Tasks", route: "/tasks"}, {id: 5, name: "Profile", route: "/profile"}, {id: 6, name: "Settings", route: "/settings"}];

  ngOnInit(): void {
    this.openMenuIfPc();
  }

  openMenuIfPc = () => {
    let asideMenu: HTMLElement = document.getElementsByTagName("aside")[0];
    !this._uiService.isMobile ? asideMenu.classList.add("open_menu") : false;
  }
}
