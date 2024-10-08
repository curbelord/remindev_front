import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CalendarModule } from 'primeng/calendar';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../../core/models/chart-options';
import { FormsModule } from '@angular/forms';
import ApexCharts from 'apexcharts';
import { UiService } from '../../core/services/ui/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CarouselModule, NgApexchartsModule, CalendarModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild("chart") chart: ChartComponent | undefined;

  private _uiService: UiService = inject(UiService);

  // Get and change the values. Create task card component

  products: {id: number, name: string}[] = [{id: 1, name: "Test"}, {id: 2, name: "Test"}, {id: 3, name: "Test"}, {id: 5, name: "Test"}];

  responsiveOptions: any[] | undefined;
  chartOptions: Partial<ChartOptions> | any;

  darkModeSubscription!: Subscription;

  calendarDate: Date[] | undefined;

  constructor() {
    this.chartOptions = {
      chart: {
        id: 'michart',
        type: 'area',
        toolbar: {
          show: false
        },
        height: 240,
        width: '100%',
        events: {
          mounted: () => {
            this.darkModeSubscription = this._uiService.darkModeState.subscribe({
              next: (state: boolean) => {
                if (state){
                  this.changeChartTextColor("#FFF");
                  return;
                }
                this.changeChartTextColor("");
              }
            });
          }
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      series: [
        {
          name: 'tasks - last week',
          data: [2,5,3,2, 9]
        },
        {
          name: 'tasks - this week',
          data: [4,2,5,7, 1]
        }
      ],
      dataLabels: {
        enabled: false
      },
      colors: ["#a3a3a3", "#34d399"],
      fill: {
        type: "solid",
        colors: ["#e5e5e5", "#a7f3d0"]
      },
      legend: {
        show: true,
        fontSize: '14px',
        labels: {
          colors: ''
        }
      },
      responsive: [
        {
          breakpoint: 767,
          options: {
            chart: {
              height: 288
            }
          }
        },
        {
          breakpoint: 1023,
          options: {
            chart: {
              height: 320
            }
          }
        },
        {
          breakpoint: 3000,
          options: {
            chart: {
              height: 384
            }
          }
        }
      ],
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        labels: {
          style: {
            fontSize: '14px',
            colors: ''
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '14px',
            colors: ''
          }
        },
        min: 0
      }
    }
  }

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

  ngAfterViewInit(): void {
    this.autoResizeChart();
  }

  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
  }

  autoResizeChart = (): void => {
    let chartContainer: HTMLDivElement = document.getElementById("chart_container")! as HTMLDivElement;

    let resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        this.chartOptions.chart.width = entry.contentRect.width;

        if (this.chart) {
          this.chart.updateOptions({
            chart: {
              width: entry.contentRect.width
            }
          });
        }
      }
    });
    resizeObserver.observe(chartContainer);
  }

  changeChartTextColor = (newColor: string): void => {
    this.chart?.updateOptions({
      legend: {
        labels: {
          colors: newColor
        }
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        labels: {
          style: {
            fontSize: '14px',
            colors: newColor
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '14px',
            colors: newColor
          }
        }
      }
    });
  }
}
