import { Component } from '@angular/core';
import { AdminLayoutComponent } from '../../shared/layouts/admin-layout/admin-layout.component';
import { ProjectComponent } from '../../shared/components/project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AdminLayoutComponent, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  // Get projects from backend

  projects: {id: number, name: string, endDate: string}[] = [{id: 0, name: "Project name", endDate: "01/01/2025"}, {id: 1, name: "Project name", endDate: "01/01/2025"}, {id: 2, name: "Project name", endDate: "01/01/2025"}, {id: 3, name: "Project name", endDate: "01/01/2025"}];
}
