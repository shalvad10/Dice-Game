import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ComponentBase } from 'src/app/Base/ComponentBase';
const isMobile = require('../../Services/Libs/isMobile.min.js');

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent extends ComponentBase implements OnInit {

  @Input() type!: string;
  @Input() value!: string;
  @Input() icon!: string;
  @Input() action!: string;

  constructor(ref: ChangeDetectorRef) { 
    super(ref);
  }
  
  ngOnInit(): void {
  }

  onClick() {
    this.emitAction(this.action, {})
  }
  
  public get mobile(): any {
    return isMobile;
  }

}
