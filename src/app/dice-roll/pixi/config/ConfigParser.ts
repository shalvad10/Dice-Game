import * as PIXI from 'pixi.js';
import { Helpers } from 'src/app/Services/Libs/Helpers';

class ConfigParser {
    
    constructor() {}

    public getFrames(obj: any) {
        var arr: any    = Object.keys(obj);
        var frames: any = [];

        arr.forEach((frame: any)=> {
            frames.push(PIXI.Texture.from(frame));
        });
        return frames;
    }

    public assignLoaded(config: any,assets: any) {
        console.warn(config,assets);
       

        for(var num = 0; num < 6; num++) {
            // const res = new PIXI.LoaderResource(assets.white['dice'+(num+1).toString()], assets.white);
            // PIXI.Assets.add('dice'+(num+1).toString(),assets.white['dice'+(num+1).toString()]);
            
            // Helpers.ajaxLoad(`../assets/dice/white/dice${num+1}.json`, (e: any) => {
            //     console.warn(e);
            //     // config.dice.images.white.images[(num+1).toString()] = this.getFrames(e.frames);
            //     console.warn(config.dice.images.white.images[(num+1).toString()]);
            // });

            // PIXI.Loader.shared.add(assets.white['dice'+(num+1).toString()])
            console.log(
                // PIXI.Loader.shared.resources[assets.white['dice'+(num+1).toString()]]
            );
            // config.dice.images.white.images[(num+1).toString()] = this.getFrames(PIXI.Loader.shared.resources[assets.white['dice'+(num+1).toString()]]);
        }
        for(var num = 0; num < 6; num++)
        {
            // config.dice.images.red.images[(num+1).toString()] = this.getFrames(PIXI.loader.resources[assets.dice.red['dice'+(num+1).toString()]].data.frames);
        }
        for(var num = 0; num < 6; num++)
        {
            // config.dice.images.green.images[(num+1).toString()] = this.getFrames(PIXI.loader.resources[assets.dice.green['dice'+(num+1).toString()]].data.frames);
        }
        for(var num = 0; num < 6; num++)
        {
            // config.dice.images.brown.images[(num+1).toString()] = this.getFrames(PIXI.loader.resources[assets.dice.brown['dice'+(num+1).toString()]].data.frames);
        }
        // config.dice.white.images["1"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice1].data.frames);
        // config.dice.white.images["2"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice2].data.frames);
        // config.dice.white.images["3"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice3].data.frames);
        // config.dice.white.images["4"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice4].data.frames);
        // config.dice.white.images["5"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice5].data.frames);
        // config.dice.white.images["6"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice6].data.frames);


    }
    assignProperties(config: any,dataConfig: any) {
        config.selectedTheme          = dataConfig.selectedTheme;
        config.size                   = dataConfig.size;
        config.animations.move        = dataConfig.animations.move;
        config.boardSize              = dataConfig.boardSize;
        config.HolderMax              = dataConfig.HolderMax;
        config.stackOnMaxSize         = dataConfig.stackOnMaxSize;
        config.blackKillPositionIndex = dataConfig.blackKillPositionIndex;
        config.whiteKillPositionIndex = dataConfig.whiteKillPositionIndex;
        config.checker.topSize        = dataConfig.checker.topSize;
        config.checker.sideSize.x     = dataConfig.checker.sideSize.x;
        config.checker.sideSize.y     = dataConfig.checker.sideSize.y;
        config.checker.topPosOffset   = dataConfig.checker.topPosOffset;
        config.checker.sidePosOffset  = dataConfig.checker.sidePosOffset;
        config.checker.highlightSize  = dataConfig.checker.highlightSize;

        config.holderClickRect.x      = dataConfig.holderClickRect.x;
        config.holderClickRect.y      = dataConfig.holderClickRect.y;
        config.containers             = dataConfig.containers;
        // config.diceHighlight         = dataConfig.diceHighlight;
        config.dice.size              = dataConfig.dice.size;
        config.dice.offset            = dataConfig.dice.offset;
        config.dot.offset             = dataConfig.dot.offset;
        config.dot.size.x             = dataConfig.dot.size.x;
        config.dot.size.y             = dataConfig.dot.size.y;
        // this.setTheme(config,1);
    }

    loadAssets(assets: any,onLoaded: any) {
        for(var key in assets) {
            if(key != "themes" && key != "dice") {
                // if(!PIXI.loader.resources[assets[key]])
                // {
                //     PIXI.loader.add(assets[key]);
                // }
            }
        }

        for(var key in assets.dice) {
            for(var key2 in assets.dice[key]) {
                // if(!PIXI.loader.resources[assets.dice[key][key2]])
                // {
                //     PIXI.loader.add(assets.dice[key][key2]);
                // }
            }
        }

        for(var num = 0; num < assets.themes.length; num++) {
            for(var key in assets.themes[num]) {
                if(assets.themes[num][key][0] != "_") {
                    // if(!PIXI.loader.resources[assets.themes[num][key]])
                    // {
                    //     PIXI.loader.add(assets.themes[num][key]);
                    // }
                }
            }
        }

        // PIXI.loader.load(onLoaded);
    }
}

export default new ConfigParser();