import gsap from'gsap';
// import * as gsap_then from'gsap-then';

class Animations {
    
    constructor() { }

    public showNumber(dice: any,num: any,time: any) {
        if(dice.showNumber) {
            setTimeout(()=> {
                dice.showNumber(num);
            },time);
        }
    }

    public getRandom(type: any) {
        
        var rand = Math.floor(Math.random() * 3) + 1;

        if(type == 1) {
            switch(rand) {
                case 1:{ console.warn('animate1_1'); return this.animate1_1.bind(this)};
                case 2:{ console.warn('animate2_1'); return this.animate2_1.bind(this)};
                case 3:{ console.warn('animate3_1'); return this.animate3_1.bind(this)};
            }
        }

        if(type == 2) {
            switch(rand) {
                case 1:{ console.warn('animate1_2'); return this.animate1_2.bind(this)};
                case 2:{ console.warn('animate2_2'); return this.animate2_2.bind(this)};
                case 3:{ console.warn('animate3_2'); return this.animate3_2.bind(this)};
            }
        }

        if(type == 0 || type == 3) {
            switch(rand) {
                case 1:{ console.warn('animate1_3'); return this.animate1_3.bind(this)};
                case 2:{ console.warn('animate2_3'); return this.animate2_3.bind(this)};
                case 3:{ console.warn('animate3_3'); return this.animate3_3.bind(this)};
            }
        }

        return false;
    }

    public animate1_1(diceNum: any,to: any,dice: any,num: any) {
        dice.view().alpha    = 1;
        dice.view().rotation = 0;

        if(diceNum == 1) {
            dice.view().x = 180;
            dice.view().y = 280;
            to.x          = 100;
            to.y          = 60;
            to.rot        = 0;
    
            this.showNumber(dice,num,0);
            
            gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
        }
        if(diceNum == 2) {
            setTimeout(() => {
                dice.view().x = 230;
                dice.view().y = 280;
                to.x          = 150;
                to.y          = 50;
                to.rot        = 0;
        
                this.showNumber(dice,num,0);
        
                gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
            },100)
        }
    }

    public animate2_1(diceNum: any,to: any,dice: any,num: any) {
        dice.view().alpha    = 1;
        dice.view().rotation = 0;

        if(diceNum == 1) {
            dice.view().x = 175;
            dice.view().y = 280;
            to.x          = 155;
            to.y          = 95;
            to.rot        = 0;
    
            this.showNumber(dice,num,0);
    
            gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
        }
        if(diceNum == 2) {
            setTimeout(() => {
                dice.view().x = 220;
                dice.view().y = 280;
                to.x          = 195;
                to.y          = 130;
                to.rot        = 0;
        
                this.showNumber(dice,num,0);
        
                gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
            },100)
        }
    }

    public animate3_1(diceNum: any,to: any,dice: any,num: any) {
        dice.view().alpha    = 1;
        dice.view().rotation = 0;

        if(diceNum == 1) {
            dice.view().x = 165;
            dice.view().y = 280;
            to.x          = 105;
            to.y          = 55;
            to.rot        = 20;
    
            this.showNumber(dice,num,0);
    
            gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
        }
        if(diceNum == 2) {
            setTimeout(() => {
                dice.view().x = 255;
                dice.view().y = 280;
                to.x          = 155;
                to.y          = 105;
                to.rot        = -20;
        
                this.showNumber(dice,num,0);
        
                gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
            },100)
        }
    }    

    public animate1_2(diceNum: any,to: any,dice: any,num: any) {
        dice.view().alpha    = 1;
        dice.view().rotation = 0;

        if(diceNum == 1) {
            dice.view().x = 180;
            dice.view().y = -20;
            to.x          = 130;
            to.y          = 185;
            to.rot        = 0;
    
            this.showNumber(dice,num,0);
    
            gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
        }
        if(diceNum == 2) {
            setTimeout(() => {
                dice.view().x = 230;
                dice.view().y = -20;
                to.x          = 200;
                to.y          = 175;
                to.rot        = 0;
        
                this.showNumber(dice,num,0);
        
                gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
            },100)
        }
    }

    public animate2_2(diceNum: any,to: any,dice: any,num: any) {
        dice.view().alpha    = 1;
        dice.view().rotation = 0;

        if(diceNum == 1) {
            dice.view().x = 175;
            dice.view().y = -20;
            to.x          = 125;
            to.y          = 175;
            to.rot        = 0;
    
            this.showNumber(dice,num,0);
    
            gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
        }
        if(diceNum == 2) {
            setTimeout(() => {
                dice.view().x = 220;
                dice.view().y = -20;
                to.x          = 195;
                to.y          = 155;
                to.rot        = 0;
        
                this.showNumber(dice,num,0);
        
                gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
            },100)
        }
    }

    public animate3_2(diceNum: any,to: any,dice: any,num: any) {
        dice.view().alpha    = 1;
        dice.view().rotation = 0;

        if(diceNum == 1) {
            dice.view().x = 165;
            dice.view().y = -20;
            to.x          = 135;
            to.y          = 175;
            to.rot        = 20;
    
            this.showNumber(dice,num,0);
    
            gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
        }
        if(diceNum == 2) {
            setTimeout(() => {
                dice.view().x = 255;
                dice.view().y = -20;
                to.x          = 205;
                to.y          = 170;
                to.rot        = -20;
        
                this.showNumber(dice,num,0);
        
                gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
            },100)
        }
    }

    public animate1_3(diceNum: any,to: any,dice: any,num: any) {
        dice.view().alpha    = 1;
        dice.view().rotation = 0;

        if(diceNum == 1) {
            dice.view().x = 180;
            dice.view().y = -20;
            to.x          = 180;
            to.y          = 160;
            to.rot        = 0;
    
            this.showNumber(dice,num,0);
    
            gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
        }
        if(diceNum == 2) {
            setTimeout(() => {
                dice.view().x = 230;
                dice.view().y = 580;
                to.x          = 230;
                to.y          = 95;
                to.rot        = 0;
        
                this.showNumber(dice,num,0);
        
                gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
            },100)
        }
    }

    public animate2_3(diceNum: any,to: any,dice: any,num: any) {
        dice.view().alpha    = 1;
        dice.view().rotation = 0;

        if(diceNum == 1) {
            dice.view().x = 175;
            dice.view().y = -20;
            to.x          = 175;
            to.y          = 135;
            to.rot        = 0;
    
            this.showNumber(dice,num,0);
    
            gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
        }
        if(diceNum == 2) {
            setTimeout(() => {
                dice.view().x = 220;
                dice.view().y = 580;
                to.x          = 220;
                to.y          = 110;
                to.rot        = 0;
        
                this.showNumber(dice,num,0);
        
                gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
            },100)
        }
    }

    public animate3_3(diceNum: any,to: any,dice: any,num: any) {
        dice.view().alpha    = 1;
        dice.view().rotation = 0;

        if(diceNum == 1) {
            dice.view().x = 165;
            dice.view().y = -20;
            to.x          = 125;
            to.y          = 115;
            to.rot        = 20;
    
            this.showNumber(dice,num,0);
    
            gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
        }
        if(diceNum == 2) {
            setTimeout(() => {
                dice.view().x = 255;
                dice.view().y = 580;
                to.x          = 205;
                to.y          = 135;
                to.rot        = -20;
        
                this.showNumber(dice,num,0);
        
                gsap.to(dice.view(), {duration: .4, x: to.x, y:to.y, rotation:(to.rot * (Math.PI/180))});
            },100)
        }
    }

}

export default new Animations();