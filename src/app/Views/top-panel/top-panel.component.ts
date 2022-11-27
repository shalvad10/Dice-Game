import { Component, OnInit, ChangeDetectorRef , Input} from '@angular/core';
import { ComponentBase } from 'src/app/Base/ComponentBase';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent extends ComponentBase implements OnInit {

  @Input() data!: any;

  public showNominales: boolean = false;

  constructor(ref: ChangeDetectorRef) {
    super(ref);
  }

  ngOnInit(): void {
  }

  public get nominales() {
    return this.data.game.nominales;
  }
  public get selectedNominale() {
    return this.data.game.selectedNominale;
  }
  public get currency() {
    return this.data.user.currency;
  }

  public toggleNominales() {
    this.showNominales = !this.showNominales;
  }

  public selectNominale(nominale: number) {
    this.emitAction('selectNominale', { nominale: nominale});
    this.toggleNominales();
  }

}
