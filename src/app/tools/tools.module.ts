import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    NzInputModule
  ]
})
export class ToolsModule { }
