import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ComponentBase } from 'src/app/Base/ComponentBase';
const isMobile = require('../../Services/Libs/isMobile.min.js');

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent extends ComponentBase implements OnInit {

  constructor(ref: ChangeDetectorRef) {
    super(ref);
  }

  @Input() cellData: any;

  ngOnInit(): void { }

  onClick() {
    this.emitAction('placeBet', {boardId: this.cellData.id})
  }

  public get mobile(): any {
    return isMobile;
  }

}
