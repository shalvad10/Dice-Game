import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ComponentBase } from 'src/app/Base/ComponentBase';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss']
})
export class BottomPanelComponent extends ComponentBase implements OnInit {

  @Input() data: any;
  
  constructor(ref: ChangeDetectorRef) {
    super(ref);
  }

  ngOnInit(): void { }

  public get chips(): number[] {
    return this.data.game.chips.all;
  }
  public get selectedChip(): number {
    return this.data.game.chips.selected;
  }
  public get betActions() {
    return this.data.game.betActions;
  }
  public get gameActions() {
    return this.data.game.gameActions;
  }

  public rollDice() {
    this.emitAction('rollDice', {});
  }

}
