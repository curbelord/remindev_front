import { Component, input } from '@angular/core';

@Component({
  selector: 'app-top-right-options',
  standalone: true,
  imports: [],
  templateUrl: './top-right-options.component.html',
  styleUrl: './top-right-options.component.css'
})
export class TopRightOptionsComponent {
  readonly icons: {id: number, class: string}[] = [{id: 0, class: "plus"}, {id: 1, class: "filter"}, {id: 2, class: "sliders-h"}, {id: 3, class: "times"}];

  iconsToPrint = input.required<string[]>();
  backgroundColor = input.required<"white" | "stone-100">();
}
