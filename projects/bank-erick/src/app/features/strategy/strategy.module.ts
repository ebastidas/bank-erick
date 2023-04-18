import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { StrategyComponent } from './strategy/strategy.component';
import { StrategyRoutingModule } from './strategy-routing.module';

@NgModule({
  declarations: [StrategyComponent],
  imports: [CommonModule, SharedModule, StrategyRoutingModule]
})
export class StrategyModule {}
