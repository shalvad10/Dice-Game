import { ChangeDetectorRef, Component } from '@angular/core';
import { ComponentBase } from './Base/ComponentBase';
import { AppMain } from './Services/AppMain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends ComponentBase {
  title = 'dicegame';
  public app!: AppMain;

  constructor (ref: ChangeDetectorRef) {
    super(ref);
    this.app = new AppMain(this.actionsAppMain.bind(this));
  }
  public get data() {
    return this.app.dataObject;
  }

  public actionsAppMain(data: any) {
    
  }

  handleAction (e: any) {
    this.app.doAction(e);    
  }
}
