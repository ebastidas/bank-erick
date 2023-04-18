import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bkek-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StrategyComponent {}
