import { Sender } from '../Actions/Sender';

export default abstract class BaseResponseHandler {

  public onAction!: (params:any) => void;

  constructor(public data: any, public sender: Sender, onAction: (params: any) => void) {
    this.onAction = onAction;
   }

  public onConnected() {
    this.data.connection.connected = true;

    setTimeout(() => {
      this.sender.login();
    }, 500);
  }

  public onDisconnected() {
    this.data.connection.connected  = false;
    this.data.gameTables            = [];
    this.data.tournamentTables      = [];
  }

  public onError(code:any, key:any, msg:any) {
    switch (code) {
      
    }
  }

  public handleResponses(code: number, data: any): void {
    
  }
}
