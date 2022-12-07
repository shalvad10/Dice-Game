import * as PIXI from 'pixi.js';

export default class Dice {
  public props: any;
  public type: any;
  public cont: any;
  public numb: any;
  public colors: any = {};
  public area: any;

  constructor(props: any,type: any) {
    this.props = props;
    this.type = type;
    this.init();
  }
  public showNumberNoAnimation(num: any) {
    if(num>=1 && num<=6) {
      this.numb = num;
      this.cont.visible = true;
      Object.keys(this.colors).forEach(color => {
        Object.keys(this.colors[color].types).forEach(key => {
          this.colors[color].types[key].visible = false;
          this.colors[color].types[key].stop();
          if(num.toString() == key) {
              this.colors[color].types[key].visible = true;
              this.colors[color].types[key].gotoAndStop(0);
          }
        });
      });
    }
  }

  public hideNumber() {
    Object.keys(this.colors).forEach(color => {
      Object.keys(this.colors[color].types).forEach(key => {
        this.colors[color].types[key].visible = false;
        this.colors[color].types[key].stop();
      });
    });
  }

  public showNumber(num: any) {
    if(num>=1 && num<=6) {
      this.numb = num;
      this.cont.visible = true;
      const diceIndex = `dice${num}`;
      console.warn(this.colors[diceIndex].types, diceIndex)
      this.hideNumber();
      Object.keys(this.colors[diceIndex].types).forEach( key => {
        if(num.toString() == key) {
            this.colors[diceIndex].types[key].visible = true;
            this.colors[diceIndex].types[key].gotoAndPlay(0);
            this.colors[diceIndex].types[key].width               = this.props.size;
            this.colors[diceIndex].types[key].height              = this.props.size;
        }
      });
    }
  }

    public changeButtonMode(val: any) {
      this.area.interactiveChildren = val;
      this.area.interactive         = val;
      this.area.buttonMode          = val;
    }

    public resetDice(fullDice: any, num = -1) {
      if ( num > 0) {
        if ( num === this.numb ) {
          this.area.interactiveChildren = false;
          this.area.interactive         = false;
          this.area.buttonMode          = false;
        }
      }
    }

    public disableDice(num: any) {
      var color = '';
      if (this.colors['white'] && this.colors['red'] && this.colors['green'] && this.colors['brown']) {
        color = this.colors['white'].visible ? 'white' : this.colors['red'].visible ? 'red' : this.colors['green'].visible ? 'green' : this.colors['brown'].visible ? 'brown' : ''
      }
      if ( num === this.numb ) {
        this.area.interactiveChildren = false;
        this.area.interactive         = false;
        this.area.buttonMode          = false;
      }
    }

    public disableClick(num: any) {
      if ( num === this.numb ) {
        this.area.interactiveChildren = false;
        this.area.interactive         = false;
        this.area.buttonMode          = false;
      }
    }

    public enableDice(num: any) {
      if ( num === this.numb ) {
        this.area.interactiveChildren = true;
        this.area.interactive         = true;
        this.area.buttonMode          = true;
      }
    }

    public hideDice(hideAnimation: any) {
        if(hideAnimation) {
            hideAnimation(this);
        } else {
            this.cont.visible = false;
        }
    }

    public view() {
        return this.cont;
    }
    

    public init() {
        this.cont      = new PIXI.Container();
        this.cont.interactive         = false;
        this.cont.interactiveChildren = true;

        this.area = new PIXI.Graphics();
        this.area.lineStyle(0);
        this.area.beginFill(0xFFFF0B, 0);
        this.area.drawCircle(0, 0,20);
        this.area.interactiveChildren = true;
        this.area.interactive         = true;
        this.area.buttonMode          = true;
        this.area.endFill();

        Object.keys(this.props.images).forEach(color => {
            this.colors[color] = new PIXI.Container();

            var types: any  = {};
            Object.keys(this.props.images[color].images).forEach(key => {
                types[key] = new PIXI.AnimatedSprite(this.props.images[color].images);
                types[key].interactiveChildren = false;
                types[key].interactive         = false;
                types[key].loop                = false;
                types[key].width               = 0;
                types[key].height              = 0;
                types[key].anchor.set(0.5,0.5);
                types[key].animationSpeed = 0.5;
                // types[key].play();
                
                this.colors[color].addChild(types[key]);
            });
            this.colors[color].types = types;
            this.cont.addChild(this.colors[color]);
        });
        this.cont.addChild(this.area);
    }
}