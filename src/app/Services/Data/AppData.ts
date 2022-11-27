import { BaseData   } from '../Base/BaseData';
import {ModalData   } from './ModalData';
import {SettingsData} from './SettingsData';

export class AppData {
  public base    :BaseData;
  public modal   :ModalData;
  public settings:SettingsData;

  constructor() {
    this.base     = new BaseData();
    this.modal    = new ModalData();
    this.settings = new SettingsData();

    this.base.data.settings = this.settings.data;
    this.base.data.modal    = this.modal.data;
  }

  public setProperties(data: any): void {
    this.base.data.connection.sessionKey = data.sessionkey;
  }
  public setBaseData(data: any): void {
    this.base.data.currency = data.currency;
    this.base.data.amountDivide = data.amountDivide;
    this.base.data.language.selectedLanguage = data.language;
    this.base.data.baseColors = data.colors;
    this.base.data.game = data.game;
    this.base.data.connection.connectionURL = data.connectionURL;
  }
  public setSettingsData(data: any): void {
    this.settings.data.settings.boards = data.backgroundColors;
    this.settings.data.settings.figures = data.cardColors;
    this.settings.data.rules = data.rules;
  }

  public get dataObject() {
    return this.base.data;
  }
}
