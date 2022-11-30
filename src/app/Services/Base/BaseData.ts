import { AppEnums } from './../Enums/AppEnums';

export class BaseData {
  public data: any = {
    connection: {
      connectionURL: '',
      connected: false,
      partnerID: 1,
      accountID: 0,
      deviceType: AppEnums.DeviceType.Desktop,
      sessionKey: undefined
    },
    loading: true,
    ammountDivide: 10000,
    user: {
      userName: '',
      balance: 0,
      holdBalance: 0,
      currency: 'GEL'
    },
    game: {
      nominales: [0.03,0.10,0.40,1,2,5],
      selectedNominale: 0.03,
      boards: [
        {id: 0,  number: 2,  multiplier: 36, isEpic: true,  dices: [[1,1]], betAmmount: 0},
        {id: 1,  number: 3,  multiplier: 18, isEpic: false, dices: [[1,2],[2,1]], betAmmount: 0},
        {id: 2,  number: 4,  multiplier: 12, isEpic: false, dices: [[1,3],[2,2],[3,1]], betAmmount: 0},
        {id: 3,  number: 5,  multiplier: 9,  isEpic: false, dices: [[1,4],[2,3],[3,2],[4,1]], betAmmount: 0},
        {id: 4,  number: 6,  multiplier: 7,  isEpic: false, dices: [[1,5],[2,4],[3,3],[4,2],[5,1]], betAmmount: 0},
        {id: 5,  number: 7,  multiplier: 6,  isEpic: false, dices: [[1,6],[2,5],[3,4],[4,3],[5,2],[6,1]], betAmmount: 0},
        {id: 6,  number: 8,  multiplier: 7,  isEpic: false, dices: [[2,6],[3,5],[4,4],[5,3],[6,2]], betAmmount: 0},
        {id: 7,  number: 9,  multiplier: 9,  isEpic: false, dices: [[3,6],[4,5],[5,4],[6,3]], betAmmount: 0},
        {id: 8,  number: 10, multiplier: 12, isEpic: false, dices: [[4,6],[5,5],[6,4]], betAmmount: 0},
        {id: 9,  number: 11, multiplier: 18, isEpic: false, dices: [[5,6],[6,5]], betAmmount: 0},
        {id: 10, number: 12, multiplier: 36, isEpic: true,  dices: [[6,6]], betAmmount: 0},
      ],
      chips: {
        all: [0.15,0.5,1,5,50],
        selected: 0.15
      },
      history: [
        [1,6],[2,5],[3,4],[4,3],[5,2],[6,1]
      ],
      betActions: [
        { action: 'doubleBet', value: 'X2', type: 'text', icon: null},
        { action: 'doubleBet', value: '', type: 'text', icon: null},
        { action: 'doubleBet', value: '', type: 'text', icon: null}
      ],
      gameActions: [
        { action: 'showWin', value: 'Show Win' , type: 'text', icon: null},
        { action: 'megaPhone', value: null , type: 'icon', icon: 'megaphone'},
        { action: 'gameInfo', value: null , type: 'icon', icon: 'info'}
      ]
    }
  };
}
