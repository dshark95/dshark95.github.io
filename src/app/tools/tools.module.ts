import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzFormModule } from'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    NzInputModule,
    NzInputNumberModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ToolsModule { }
