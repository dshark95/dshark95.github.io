import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzFormModule } from'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { TranslocoModule } from '@ngneat/transloco';
import { CalculationModalComponent } from './modal/calculation-modal/calculation-modal.component';

@NgModule({
  declarations: [CalculatorComponent, CalculationModalComponent],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    NzInputModule,
    NzInputNumberModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzCollapseModule,
    NzTableModule,
    NzButtonModule,
    NzSpaceModule,
    NzModalModule,
    NzDropDownModule,
    NzSelectModule,
    TranslocoModule
  ]
})
export class ToolsModule { }
