import { Component, input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FormsModule, MenuModule, ButtonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projectOptions: MenuItem[] = [{ label: 'Edit', icon: 'pi pi-pencil', command: () => {}}, { label: 'Remove', icon: 'pi pi-trash', command: () => {}}];

  id = input.required<number>();
  name = input.required<string>();
  endDate = input.required<string>();
}
