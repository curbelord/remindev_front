import { Component, input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [FormsModule, MenuModule, ButtonModule],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent {
  areaOptions: MenuItem[] = [{ label: 'Edit', icon: 'pi pi-pencil', command: () => {}}, { label: 'Remove', icon: 'pi pi-trash', command: () => {}}];

  id = input.required<number>();
  name = input.required<string>();
  projectId = input.required<number | null>();
}
