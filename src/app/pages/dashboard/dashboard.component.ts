import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { RecentSalesComponent } from '../../components/recent-sales/recent-sales.component';
import { RecentActivityComponent } from '../../components/recent-activity/recent-activity.component';
import { BudgetReportComponent } from '../../components/budget-report/budget-report.component';
import { WebsiteTrafficComponent } from '../../components/website-traffic/website-traffic.component';
import { TopSellingComponent } from '../../components/top-selling/top-selling.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    StatsCardComponent,
    LineChartComponent,
    RecentSalesComponent,
    RecentActivityComponent,
    BudgetReportComponent,
    WebsiteTrafficComponent,
    TopSellingComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
