import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  // Get and change the values. Create task card component

  products: {id: number, name: string}[] = [{id: 1, name: "Test"}, {id: 2, name: "Test"}, {id: 3, name: "Test"}, {id: 5, name: "Test"}];

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '2560px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '1980px',
          numVisible: 3,
          numScroll: 3
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }
}
