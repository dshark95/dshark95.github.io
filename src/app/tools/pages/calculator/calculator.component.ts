import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  minValue:number = 0;

  maxPercent:number = 100;

  numberForm!:FormGroup;

  formLabelSpan:number = 7;
  formFieldSpan:number = 12;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit():void{
    this.numberForm = this.fb.group({
      totalAmount:[0],
      percentage:[0]
    });
  }

  formatterPercent = (value: number) => `${value} %`;
  parserPercent = (value: string) => value.replace(' %', '');

  calc():number{
    let multiplier:number = this.numberForm.controls["percentage"].value/100;
    return this.numberForm.controls["totalAmount"].value * multiplier;
  }

}
