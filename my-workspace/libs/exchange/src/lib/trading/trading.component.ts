import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-trading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradingComponent {}
