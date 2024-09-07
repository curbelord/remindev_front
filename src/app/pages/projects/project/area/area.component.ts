import { Component } from '@angular/core';
import { TopRightOptionsComponent } from '../../../../shared/components/top-right-options/top-right-options.component';
import { TaskCardComponent } from '../../../../shared/components/task-card/task-card.component';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [TopRightOptionsComponent, TaskCardComponent],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent {

}
