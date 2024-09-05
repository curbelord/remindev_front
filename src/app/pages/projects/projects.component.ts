import { Component } from '@angular/core';
import { ProjectComponent } from '../../shared/components/project/project.component';
import { TopRightOptionsComponent } from '../../shared/components/top-right-options/top-right-options.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, TopRightOptionsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  // Get projects from backend

  projects: {id: number, name: string, endDate: string}[] = [{id: 0, name: "Project name", endDate: "01/01/2025"}, {id: 1, name: "Project name", endDate: "01/01/2025"}, {id: 2, name: "Project name", endDate: "01/01/2025"}, {id: 3, name: "Project name", endDate: "01/01/2025"}];
}
