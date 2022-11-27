import { Sender } from './Sender';

export default class Actions {
  
  constructor(public data: any, public sender: Sender) {}

  public onAction(type: string, data: any) {

    switch (type) {
      case 'selectChip'     : { this.selectChip(data);      break;  }
      case 'placeBet'       : { this.placeBet(data);        break;  }
      case 'doubleBet'      : { this.doubleBet();           break;  }
      case 'selectNominale' : { this.selectNominale(data);  break;  }
      case 'rollDice'       : { this.rollDice();            break;  }
      
    }
  }

  public rollDice(): void {
    this.data.game.boards.forEach((board: any) => {
      board.betAmmount = 0;
    });
  }
  public selectChip(data: any): void {
    this.data.game.chips.selected = data.data
  }

  public selectNominale(data: any) {
    this.data.game.selectedNominale = data.nominale;
  }

  public placeBet(data: any): void {
    const board = this.data.game.boards.filter( (board: any) => board.id == data.boardId)[0];
    console.warn(data,board);
    board.betAmmount += this.data.game.chips.selected;
   }

   public doubleBet(): void {

    this.data.game.boards.forEach((board: any) => {
      board.betAmmount *= 2;
    });
   }

}
