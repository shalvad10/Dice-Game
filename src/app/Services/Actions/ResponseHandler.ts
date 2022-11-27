import BaseResponseHandler from '../Base/BaseResponseHandler';
import { Sender } from './Sender';

export class ResponseHandler extends BaseResponseHandler {

  constructor(data: any, sender: Sender, onAction: (params:any) => void) {
    super(data, sender, onAction);
  }

  public override handleResponses(code: number, data: any): void {
    super.handleResponses(code, data);
  }

}
