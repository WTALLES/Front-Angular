import {Component, OnInit} from '@angular/core';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  options: EChartsOption = {
    legend: {},
    tooltip: {},
    dataset: {
      // Provide a set of data.
      source: [
        ['UGB', 'SAMSUNG', 'DENSO', 'MASA'],
        ['Falha de Injeção', 43.3, 85.8, 93.7],
        ['Rebarba', 83.1, 73.4, 55.1],
        ['Furo Obstruido', 86.4, 65.2, 82.5],
        ['Contaminação', 72.4, 53.9, 39.1],
      ],
    },

    xAxis: {type: 'category'},
    // Declare a y-axis (value axis).
    yAxis: {},
    // Declare several 'bar' series,
    // every series will auto-map to each column by default.
    series: [{type: 'bar'}, {type: 'bar'}, {type: 'bar'}],
  };
  mergeOptions: EChartsOption;

  randomDataset() {
    this.mergeOptions = {
      dataset: {
        source: [
          ['Turno', '1', '2', '3'],
          ['Falha de Injeção', ...this.getRandomValues()],
          ['Rebarba', ...this.getRandomValues()],
          ['Furo Obstruido', ...this.getRandomValues()],
          ['Contaminação', ...this.getRandomValues()],
        ],
      },
    };
  }

  private getRandomValues() {
    const res: number[] = [];
    for (let i = 0; i < 3; i++) {
      res.push(Math.random() * 100);
    }
    return res;
  }
  ngOnInit() {
    this.randomDataset()
  }
}
