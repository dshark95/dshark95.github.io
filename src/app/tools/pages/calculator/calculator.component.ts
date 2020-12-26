import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { CalculationModalComponent } from '../../modal/calculation-modal/calculation-modal.component';

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

  spaceSize:"small" = "small";

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

  clearSingle(i:number){
    this.modalService.confirm({
      nzTitle: '<b>Do you want to remove this result?</b>',
      nzContent: '',
      nzOnOk: () => { console.log(i);
        this.tableData = [...this.tableData.filter((x,index)=> index!=i)];
        this.markAsClean();
      }
    });
  }

  openAddonCalculationModal(value:number){
    let modalRef:NzModalRef = 
    this.modalService.create({
      nzContent:CalculationModalComponent,
      nzFooter:null,
      nzTitle:"Addon Calculation",
      nzComponentParams:{
        value:value
      }
    });

    modalRef.afterClose.subscribe(respond=>{
      if(respond){
        let object = {
          equation:"-",
          result:0
        };

        switch (respond.action) {
          case "add":
            object.equation = value + " + " + respond.addonValue;
            object.result = Number(value) + Number(respond.addonValue);
            break;
          case "subtract":
            object.equation = value + " - " + respond.addonValue;
            object.result = Number(value) - Number(respond.addonValue);
            break;
          case "multiply":
            object.equation = value + " x " + respond.addonValue;
            object.result = Number(value) * Number(respond.addonValue);
            break;
          case "divide":
            object.equation = value + " / " + respond.addonValue;
            object.result = Number(value) / Number(respond.addonValue);
            break;        
          default:
            break;
        }

        object.result = this.rouding(object.result, 2);

        this.tableData = [...this.tableData, object];
      }
    });
  } 
}
