import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss'
})
export class StatsCardComponent {
  @Input() title: string = '';
  @Input() period: string = '';
  @Input() value: string = '';
  @Input() percentChange: string = '';
  @Input() isIncrease: boolean = true;
  @Input() icon: string = '';

  // Dynamic background color based on icon type
  get bgColor(): string {
    switch (this.icon) {
      case 'cart':
        return 'rgba(65, 84, 241, 0.1)';
      case 'currency-dollar':
        return 'rgba(46, 204, 113, 0.1)';
      case 'people':
        return 'rgba(255, 159, 64, 0.1)';
      default:
        return 'rgba(0, 0, 0, 0.1)';
    }
  }

  // Dynamic icon color based on icon type
  get iconColor(): string {
    switch (this.icon) {
      case 'cart':
        return 'var(--primary-color)';
      case 'currency-dollar':
        return 'var(--success-color)';
      case 'people':
        return 'var(--warning-color)';
      default:
        return 'var(--dark-color)';
    }
  }
}
