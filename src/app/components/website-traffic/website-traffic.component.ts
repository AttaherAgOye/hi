import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutChartComponent } from '../donut-chart/donut-chart.component';

@Component({
  selector: 'app-website-traffic',
  standalone: true,
  imports: [CommonModule, DonutChartComponent],
  templateUrl: './website-traffic.component.html',
  styleUrl: './website-traffic.component.scss'
})
export class WebsiteTrafficComponent {

}
