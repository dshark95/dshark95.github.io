import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  minValue:number = 0;

  maxPercent:number = 100;

  numberForm!:FormGroup;

  formLabelSpan:number = 4;
  formFieldSpan:number = 8;

  tableConfig = [
    {label: "Equation", key:"equation", width:"200px" },
    {label: "Result", key:"result", width:"50px" }
  ];

  tableData:any[] = [];

  isContainerOpen:boolean = true;

  spaceSize:string = "small";

  constructor(private fb:FormBuilder,
    private modalService:NzModalService) { 
  }

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
    return this.rouding(this.numberForm.controls["totalAmount"].value * multiplier, 2);
  }

  rouding(value:number, decimalPoint:number):number{
    return Math.round(value * Math.pow(10, decimalPoint)) / Math.pow(10, decimalPoint); 
  }

  save(){
    let object = {
      equation: this.numberForm.controls["totalAmount"].value + " x " + this.numberForm.controls["percentage"].value + "%",
      result:this.calc()
    }

    this.tableData = [...this.tableData, object];

    this.markAsClean();
  }

  markAsClean(){
    this.numberForm.markAsPristine();
  }

  clear(){
    this.modalService.confirm({
      nzTitle: '<b>Do you want to clear these items?</b>',
      nzContent: '',
      nzOnOk: () => {
        this.tableData = [];
      }
    });
  }
}
