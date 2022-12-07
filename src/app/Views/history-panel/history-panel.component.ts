import { Component, Input, OnInit } from '@angular/core';
const isMobile = require('../../Services/Libs/isMobile.min.js');

@Component({
  selector: 'app-history-panel',
  templateUrl: './history-panel.component.html',
  styleUrls: ['./history-panel.component.scss']
})
export class HistoryPanelComponent implements OnInit {

  @Input() gameHistory: any;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  public get mobile(): any {
    return isMobile;
  }

}
