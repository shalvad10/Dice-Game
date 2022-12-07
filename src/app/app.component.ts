import { ChangeDetectorRef, Component } from '@angular/core';
import { ComponentBase } from './Base/ComponentBase';
import { AppMain } from './Services/AppMain';
import { Helpers } from './Services/Libs/Helpers';
const isMobile = require('./Services/Libs/isMobile.min.js');

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
    Helpers.ajaxLoad('../assets/game-assets.json', (e: any) => {
      this.data.game.dices = e.dice;
    });
  }

  public get data() {
    return this.app.dataObject;
  }

  public actionsAppMain(data: any) {
    
  }
  public get mobile(): any {
    return isMobile;
  }

  handleAction (e: any) {
    this.app.doAction(e);
    if (e.action == 'rollDice') {
      console.warn(e);
    }    
  }

  public get gameHistory() {
    return this.data.game.history;
  }

  public get portraitMode() {
    return isMobile.any && window.innerWidth < window.innerHeight;
  }
}
