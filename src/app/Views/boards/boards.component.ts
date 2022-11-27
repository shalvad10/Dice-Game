import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ComponentBase } from 'src/app/Base/ComponentBase';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent extends ComponentBase implements OnInit {


  @Input() data: any;

  constructor(ref: ChangeDetectorRef) {
    super(ref);
  }

  ngOnInit(): void {

  }

  public get boards() {
    return this.data.game.boards;
  }

  public get gameHistory() {
    return this.data.game.history;
  }

}
