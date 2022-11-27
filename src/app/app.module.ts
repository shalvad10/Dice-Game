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

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    BoardComponent,
    TopPanelComponent,
    BottomPanelComponent,
    IconButtonComponent,
    ChipsContainerComponent,
    ChipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
