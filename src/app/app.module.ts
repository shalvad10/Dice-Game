import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardsComponent } from './Views/boards/boards.component';
import { BoardComponent } from './Views/board/board.component';
import { TopPanelComponent } from './Views/top-panel/top-panel.component';
import { BottomPanelComponent } from './Views/bottom-panel/bottom-panel.component';
import { IconButtonComponent } from './Views/icon-button/icon-button.component';
import { ChipsContainerComponent } from './Views/chips-container/chips-container.component';
import { ChipComponent } from './Views/chip/chip.component';
import { HistoryPanelComponent } from './Views/history-panel/history-panel.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    BoardComponent,
    TopPanelComponent,
    BottomPanelComponent,
    IconButtonComponent,
    ChipsContainerComponent,
    ChipComponent,
    HistoryPanelComponent,
    DiceRollComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
