import * as PIXI from 'pixi.js';
import DiceCont from './dice/DiceCont';
const isMobile = require('../../Services/Libs/isMobile.min.js');

declare var TweenMax: any;

export default class Board {
    public board: any;
    public props: any;
    public cont: any;
    public dices: any;
    public isDevice: boolean= false;

    constructor(props: any) {
        this.props = props;
        this.init();
    }

    public getDicePositions(size: any,dice: any,type: any) {
        return this.dices.getDicePositions(size,dice,type);
    }

    public showDice(from: any,to: any,id: any,color: any,num: any,rotation: any,hideAnimation: any,rollAnimation: any) {
        this.dices.showDice(from,to,id,color,num,rotation,hideAnimation,rollAnimation);
    }

    public highlightDice(type: any, num: any) {
        this.dices.highlightDice(type, num);
    }

    public resetDices(fullDice: any, numb = -1) {
        this.dices.resetDices(fullDice, numb);
    }

    public hideDice(id: any,hideAnimation: any) {
        this.dices.hideDice(id,hideAnimation);
    }      

    public disableDice(num: any, diceRoll: any, type: any) {
      if (diceRoll == 1) {
        this.dices.disableDice(num, type);
      }
    }

    public disableClick(num: any, diceRoll: any, type: any) {
      if (diceRoll == 1) {
        this.dices.disableClick(num, type);
      }
    }

    public enableDice(num:any, diceRoll:any, type:any) {
      if (diceRoll == 1) {
        this.dices.enableDice(num, type);
      }
    }

    public interactive(val: boolean) {
        if(val != undefined) {
            this.cont.interactiveChildren = val;
            this.cont.interactive         = val;
            // cont.buttonMode          = val;
        }
    }

    public view() {
        return this.cont;
    }

    public resize(w:number,h:number)
    {
        this.cont.width  = w;
        this.cont.height = h;
    }

    
    public disable(item: any) {
        TweenMax.to(item,.3,{alpha:0,onComplete:function()
        {
            item.visible = false;
        }});
    }

    public init() {
        console.log("MOB",isMobile.any);
        document.addEventListener('contextmenu', event => event.preventDefault());

        console.error(this.props);
        this.cont             = new PIXI.Container();
        this.dices            = new DiceCont(this.props);
        this.board            = new PIXI.Sprite(PIXI.Texture.EMPTY);
        this.isDevice         = isMobile.any; // temp solution, it must be component input
        this.board.width      = this.props.boardSize.x;
        this.board.height     = this.props.boardSize.y;

        this.cont.addChild(this.board);
        this.cont.addChild(this.dices.view());

        this.cont.name             = "Board";
        this.board.name            = "Dice Roll Container";
    }
}