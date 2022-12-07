import { ChangeDetectorRef, Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { ComponentBase } from '../Base/ComponentBase';
import * as PIXI from 'pixi.js';
import Board from './pixi/Board';
import Animations from './pixi/Animations';


@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent extends ComponentBase implements OnInit {

  @ViewChild('appView') view!: ElementRef;

  private app        :  any;
  private board      :  any;
  private container  :  any;
  private loader     !: PIXI.Loader;


  @Input() gameData: any;
  @Input() set dices(val: any) {
    console.warn('new dicees', val);
    this.updateDices();
  }

  constructor(private zone:NgZone, ref:ChangeDetectorRef) {
    super(ref);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.onLoaded();
    }, 1000);
  }

  public get dices() {
    return this.gameData.rolledDices
  }

  private resize(): void {
    var ratio  = Math.min(this.gameData.boardConfig.size.x / this.gameData.boardConfig.boardSize.x, this.gameData.boardConfig.size.y / this.gameData.boardConfig.boardSize.y);
    var w      = this.gameData.boardConfig.boardSize.x*ratio;
    var h      = this.gameData.boardConfig.boardSize.y*ratio;

    this.app.renderer.view.style.setProperty('width' , w + "px");
    this.app.renderer.view.style.setProperty('height', h + "px");

    this.app.renderer.resize(w,h);
    this.board.resize(w,h);
  }

  public onLoaded() {
    this.zone.runOutsideAngular( ()=> {
        PIXI.settings.RESOLUTION = window.devicePixelRatio;
        this.app = new PIXI.Application({width: this.gameData.boardConfig.size.x, height: this.gameData.boardConfig.size.y,backgroundAlpha: 0});
        this.loader = this.app.loader;
        this.loader
          .add('./assets/dice/white/dice1.json')
          .add('./assets/dice/white/dice2.json')
          .add('./assets/dice/white/dice3.json')
          .add('./assets/dice/white/dice4.json')
          .add('./assets/dice/white/dice5.json')
          .add('./assets/dice/white/dice6.json');
          this.loader.load( () => {
            for(let j = 1; j < 7; j++) {
              const diceTextures = [];
              for (let i = 1; i < 17; i++) {
                const framekey = `white_${j}_(${i}).ase`;
                const texture = PIXI.Texture.from(framekey);
                diceTextures.push(texture);
              }
              this.gameData.boardConfig.dice.images[`dice${j}`].images = diceTextures;
            }
            this.container = new PIXI.Container();
    
            this.app.stage.addChild(this.container);
            this.view.nativeElement.appendChild(this.app.view);
    
            this.board = new Board(this.gameData.boardConfig);
          
            this.container.addChild(this.board.view());
            // this.updateDices();
            this.resize();
          });
      });

      this.emitAction('appLoaded');

      console.log(this.app);
  }

  public testAction() {

  }

  private updateDices() {
    if(this.board) {
      if(this.dices) {

        var obj = this.board.getDicePositions(this.gameData.boardConfig.boardSize,this.gameData.boardConfig.dice,this.dices['diceRoll']);

        console.error(obj);
        
        this.board.hideDice(0);
        this.board.hideDice(1);

        var diceAnimFunc:any = Animations.getRandom(this.dices['diceRoll']);

        var color1 = 'white';
        var color2 = 'white';

        console.log("DICEEE",this.dices,color1,color2);

        if (this.dices.diceRoll !== 1) {
          this.board.resetDices(true);
        }

        if(diceAnimFunc) {
          this.board.showDice(
            obj.dice1.start,
            obj.dice1.end,
            0,
            color2,
            this.dices.dice1,
            obj.dice1.rot,
            null,
            (to: any,dice: any,num: any)=>{diceAnimFunc(1,to,dice,num)}
            );
          this.board.showDice(
            obj.dice2.start,
            obj.dice2.end,
            1,
            color1,
            this.dices.dice2,
            obj.dice2.rot,
            null,
            (to: any,dice: any,num: any)=>{diceAnimFunc(2,to,dice,num)}
            );
        }

      } else {
        this.board.hideDice(0);
        this.board.hideDice(1);
      }
    }
  }

}
