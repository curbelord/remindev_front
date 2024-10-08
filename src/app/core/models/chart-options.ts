import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexDataLabels, ApexFill, ApexYAxis, ApexResponsive } from "ng-apexcharts";

export interface ChartOptions {
  series: ApexAxisChartSeries,
  chart: ApexChart,
  xaxis: ApexXAxis,
  stroke: ApexStroke,
  dataLabels: ApexDataLabels,
  colors: string[],
  fill: ApexFill,
  yaxis: ApexYAxis | ApexYAxis[],
  responsive: ApexResponsive[],
  legend: ApexLegend
}
