import { Sender } from '../Actions/Sender';

export default abstract class BaseEventHandler {
  public onAction: (params:any) => void;
  
  constructor(private data: any, private sender: Sender, onAction: (params:any) => void) {
    this.onAction = onAction;
  }

  public handleEvents(code: number, data: any): void {
    switch (code) {
      
    }
  }

}
