const DiceRoll = require('./../enums/DiceRoll');
import * as PIXI from 'pixi.js';
import Dice from './Dice';

export default class DiceCont {
  public cont:any;
  public dices: any[] = [];

  constructor(public props: any) {
    this.init();
  }
  
  public hideDice(id: any,hideAnimation: any) {
    this.dices[id].hideDice(hideAnimation);
  }
  public view() {
    return this.cont;
  }

  public getDicePositions(size: any,dice: any,type: any) {
    var startPos1 = {x:0,y:0};
    var startPos2 = {x:0,y:0};
    var endPos1   = {x:0,y:0};
    var endPos2   = {x:0,y:0};
    var diceRot1  = 0;
    var diceRot2  = 0;

    switch(type) {
      case DiceRoll.BOTH: {
        startPos1.x = (size.x/5) + dice.offset.x;
        startPos1.y =  dice.offset.y;
        startPos2.x = (size.x/3) + dice.offset.x;
        startPos2.y = (size.y)   +  dice.offset.y;

        endPos1  .x = startPos1.x;
        endPos1  .y = (size.y/2) +  dice.offset.y;// + Math.floor(Math.random() * dice.size) - dice.size;
        endPos2  .x = startPos2.x;
        endPos2  .y = (size.y/2) +  dice.offset.y;// + Math.floor(Math.random() * dice.size) - dice.size;

        diceRot1    = 180;
        diceRot2    = 0;
        break;
      }
      case DiceRoll.PLAYER: {
        startPos1.x = (size.x/4) + (dice.offset.x) - (dice.size / 2);
        startPos1.y = (size.y)   +  dice.offset.y;
        startPos2.x = (size.x/4) + (dice.offset.x) + (dice.size / 2);
        startPos2.y = (size.y)   +  dice.offset.y;

        endPos1  .x = startPos1.x;
        endPos1  .y = (size.y/2) +  dice.offset.y;// + Math.floor(Math.random() * dice.size) - dice.size;
        endPos2  .x = startPos2.x;
        endPos2  .y = (size.y/2) +  dice.offset.y;// + Math.floor(Math.random() * dice.size) - dice.size;

        diceRot1    = 0;
        diceRot2    = 0;
        break;
      }
      case DiceRoll.OPPONENT: {
        startPos1.x = (size.x/4) + (dice.offset.x) - (dice.size / 2);
        startPos1.y =  dice.offset.y;
        startPos2.x = (size.x/4) + (dice.offset.x) + (dice.size / 2);
        startPos2.y =  dice.offset.y;

        endPos1  .x = startPos1.x;
        endPos1  .y = (size.y/2) +  dice.offset.y;// + Math.floor(Math.random() * dice.size) - dice.size;
        endPos2  .x = startPos2.x;
        endPos2  .y = (size.y/2) +  dice.offset.y;// + Math.floor(Math.random() * dice.size) - dice.size;

        diceRot1    = 180;
        diceRot2    = 180;
        break;
      }
    }
    return {dice1:{start:startPos1,end:endPos1,rot:diceRot1},dice2:{start:startPos2,end:endPos2,rot:diceRot2}};
  }
  
  public removeHalf(numb: any, type: any) {
    this.dices[type].removeHalf(numb);
  }
  
  public resetDices(fullDice: any, numb = -1) {
    for(var num = 0; num < this.dices.length; num++) {
      this.dices[num].resetDice(fullDice, numb);
    }
  }
  
  public showDice(from: any,to: any,id: any,color: any,num: any,rotation: any,hideAnimation: any,rollAnimation: any) {
    this.dices[id].hideDice(hideAnimation);
    
    if(rollAnimation) {
      this.dices[id].view().x        = from.x;
      this.dices[id].view().y        = from.y;
      this.dices[id].view().rotation = rotation * (Math.PI / 180);
      
      // this.dices[id].changeColor(color);
      rollAnimation(to,this.dices[id],num);
    } else {
      this.dices[id].view().x        = to.x;
      this.dices[id].view().y        = to.y;
      this.dices[id].view().rotation = rotation * (Math.PI / 180);
      // this.dices[id].changeColor(color);
      this.dices[id].showNumber(num);
      console.error(to.x, this.dices[id].view().texture);
      
    }
  }
  
  public highlightDice(type: any, numb: any) {
    for(var num = 0; num < this.dices.length; num++) {
      this.dices[num].showHighlight(type == num, numb);
      if ( type == -1 && numb == -1 ) {
        this.dices[num].changeButtonMode(false);
      }
      if(type == num) {
        this.cont.addChild(this.dices[num].view());
      }
    }
  }
  
  public disableDice(numb:any, type = null) {
    if ( type !== null ) {
      this.dices[type].disableDice(numb);
    } else {
      for(var num = 0; num < this.dices.length; num++) {
        this.dices[num].disableDice(numb);
      }
    }
  }
  
  public disableClick(numb: any, type = null) {
    if ( type !== null ) {
      this.dices[type].disableClick(numb);
    } else {
      for(var num = 0; num < this.dices.length; num++) {
        this.dices[num].disableClick(numb);
      }
    }
  }
  
  public enableDice(numb: any, type = null) {
    if ( type !== null ) {
      this.dices[type].enableDice(numb);
    } else {
      for(var num = 0; num < this.dices.length; num++) {
        this.dices[num].enableDice(numb);
      }
    }
  }
  
  public disableHalf(numb: any, type: any) {
    this.dices[type].disableHalf(numb);
  }
    
  public init(): void {
    this.cont = new PIXI.Container();
    this.cont.interactiveChildren = true;
    this.cont.interactive         = true;
    for(var num = 0; num < 2; num ++) {
      var dice: any= new Dice(this.props.dice,num);
      dice.onSelect = this.onDiceSelected;
      this.dices.push(dice);
      this.cont.addChild(dice.view());
    }
  }
  
  public onDiceSelected(type: any,numb: any) {
    this.highlightDice(type, numb);
    console.log("LKSAJDLKSJAD",type,numb);
  }
}