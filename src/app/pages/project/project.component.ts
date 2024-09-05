import { Component, inject, OnInit } from '@angular/core';
import { AreaComponent } from '../../shared/components/area/area.component';
import { ActivatedRoute } from '@angular/router';
import { TopRightOptionsComponent } from '../../shared/components/top-right-options/top-right-options.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [AreaComponent, TopRightOptionsComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);

  areas: {id: number, name: string}[] = [{id: 0, name: "Area name"}, {id: 1, name: "Area name"}, {id: 2, name: "Area name"}, {id: 3, name: "Area name"}];

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      let idRoute = params["id"];
    })
  }
}
