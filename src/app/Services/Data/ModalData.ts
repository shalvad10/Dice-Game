export class ModalData {
  public data: any = {
    currentModal: '',
    savedModal: '',
    modalParams: {
      info: {
        infoText: '',
        title: '',
        data: {},
        buttons: [
          { text: 'OK', backgroundColor: '#5cb85c', action: 'closeGame', actionData: {} }
        ]
      }
    }
  };
}
