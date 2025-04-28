import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';

@Component({
  selector: 'app-budget-report',
  standalone: true,
  imports: [CommonModule, RadarChartComponent],
  templateUrl: './budget-report.component.html',
  styleUrl: './budget-report.component.scss'
})
export class BudgetReportComponent {

}
