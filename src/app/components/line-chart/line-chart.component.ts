import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';

Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('reportsChart') as HTMLCanvasElement;

    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
        datasets: [
          {
            label: 'Sales',
            data: [30, 35, 40, 45, 40, 50, 55],
            borderColor: 'rgb(65, 84, 241)',
            tension: 0.4,
            fill: false
          },
          {
            label: 'Revenue',
            data: [15, 20, 30, 45, 30, 35, 40],
            borderColor: 'rgb(46, 202, 106)',
            tension: 0.4,
            fill: false
          },
          {
            label: 'Customers',
            data: [10, 12, 15, 26, 18, 10, 12],
            borderColor: 'rgb(255, 130, 46)',
            tension: 0.4,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              maxTicksLimit: 5
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
  }
}
