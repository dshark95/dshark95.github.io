import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-calculation-modal',
  templateUrl: './calculation-modal.component.html',
  styleUrls: ['./calculation-modal.component.css']
})
export class CalculationModalComponent implements OnInit {

  @Input() value?:number;

  nzSize:any="small";

  dropdownList = [
    {label:"LANG.ADD", key:"add" },
    {label:"LANG.SUBTRACT", key:"subtract" },
    {label:"LANG.MULTIPLY", key:"multiply" },
    {label:"LANG.DIVIDE", key:"divide" }
  ];

  action:string = "add";

  minValue:number = 0;

  addonValue:number = 0;

  constructor(private modalRef:NzModalRef) { }

  ngOnInit(): void {
  }

  ok(){
    this.modalRef.destroy(
      {
        action:this.action,
        addonValue:this.addonValue
      }
    );
  }
}
