import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  readonly menuButtons: {id: number, name: string, route: string}[] = [{id: 1, name: "Dashboard", route: "/dashboard"}, {id: 2, name: "Projects", route: "/projects"}, {id: 3, name: "Teams", route: "/teams"}, {id: 4, name: "Tasks", route: "/tasks"}, {id: 5, name: "Profile", route: "/profile"}, {id: 6, name: "Settings", route: "/settings"}];
}
