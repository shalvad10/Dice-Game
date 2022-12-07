import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ComponentBase } from 'src/app/Base/ComponentBase';
const isMobile = require('../../Services/Libs/isMobile.min.js');

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent extends ComponentBase implements OnInit {

  @Input() value!: number;
  @Input() isSelected!: boolean;
  
  constructor(ref: ChangeDetectorRef) {
    super(ref);
  }

  ngOnInit(): void {
  }

  public get chipType() {
    return this.value >= 50 ? 'black' : (this.value >= 5 ? 'yellow' : (this.value >= 1 ? 'blue' : (this.value >= 0.5 ? 'green' : 'red')))
  }

  public onClick() {
    this.emitAction('selectChip',{data: this.value});
  }

  public get chipValue() {
    return this.value % 1 == 0 ? this.value : this.value.toFixed(2);
  }
  
  public get mobile(): any {
    return isMobile;
  }
}
