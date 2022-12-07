const PIXI = require('pixi.js');
var ConfigParser =
{
    getFrames(obj)
    {
        var arr    = Object.keys(obj);
        var frames = [];

        arr.forEach(frame=>
        {
            frames.push(PIXI.Texture.fromFrame(frame));
        });
        return frames;
    },

    assignLoaded(config,assets)
    {
        config.dot.image                         = PIXI.Texture.fromFrame(assets.dot);
        config.dot.image_alt                     = PIXI.Texture.fromFrame(assets.dot_alt);
        config.checker.checkerHighlightAvailable = PIXI.Texture.fromFrame(assets.checkerHighlightAvailable);
        config.checker.checkerHighlightMove      = PIXI.Texture.fromFrame(assets.checkerHighlightMove);

        config.dice.fullHide = PIXI.Texture.fromFrame(assets.fullHide);
        config.dice.halfHide = PIXI.Texture.fromFrame(assets.halfHide);
        config.dice.highlight = PIXI.Texture.fromFrame(assets.diceHighlight);

        for(var num = 0; num < 6; num++)
        {
            config.dice.images.white.images[(num+1).toString()] = this.getFrames(PIXI.loader.resources[assets.dice.white['dice'+(num+1).toString()]].data.frames);
        }
        for(var num = 0; num < 6; num++)
        {
            config.dice.images.red.images[(num+1).toString()] = this.getFrames(PIXI.loader.resources[assets.dice.red['dice'+(num+1).toString()]].data.frames);
        }
        for(var num = 0; num < 6; num++)
        {
            config.dice.images.green.images[(num+1).toString()] = this.getFrames(PIXI.loader.resources[assets.dice.green['dice'+(num+1).toString()]].data.frames);
        }
        for(var num = 0; num < 6; num++)
        {
            config.dice.images.brown.images[(num+1).toString()] = this.getFrames(PIXI.loader.resources[assets.dice.brown['dice'+(num+1).toString()]].data.frames);
        }
        config.dice.white.images["1"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice1].data.frames);
        config.dice.white.images["2"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice2].data.frames);
        config.dice.white.images["3"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice3].data.frames);
        config.dice.white.images["4"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice4].data.frames);
        config.dice.white.images["5"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice5].data.frames);
        config.dice.white.images["6"]  = this.getFrames(PIXI.loader.resources[assets.dice.white.dice6].data.frames);
        config.themes            = [];

        // for(var num = 0; num < assets.themes.length; num++)
        // {
        //     var obj              = {};
        //     obj.color            = assets.themes[num].color;
        //     obj.background       = PIXI.Texture.fromFrame(assets.themes[num].background);
        //     obj.board            = PIXI.Texture.fromFrame(assets.themes[num].board);
        //     obj.checkerBlackTop  = PIXI.Texture.fromFrame(assets.themes[num].checkerBlackTop);
        //     obj.checkerBlackSide = PIXI.Texture.fromFrame(assets.themes[num].checkerBlackSide);
        //     obj.checkerWhiteTop  = PIXI.Texture.fromFrame(assets.themes[num].checkerWhiteTop);
        //     obj.checkerWhiteSide = PIXI.Texture.fromFrame(assets.themes[num].checkerWhiteSide);

        //     config.themes.push(obj);
        // }
    },

    assignProperties(config,dataConfig)
    {
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
    },

    loadAssets(assets,onLoaded)
    {
        for(var key in assets)
        {
            if(key != "themes" && key != "dice")
            {
                // if(!PIXI.loader.resources[assets[key]])
                // {
                //     PIXI.loader.add(assets[key]);
                // }
            }
        }

        for(var key in assets.dice)
        {
            for(var key2 in assets.dice[key])
            {
                // if(!PIXI.loader.resources[assets.dice[key][key2]])
                // {
                //     PIXI.loader.add(assets.dice[key][key2]);
                // }
            }
        }

        for(var num = 0; num < assets.themes.length; num++)
        {
            for(var key in assets.themes[num])
            {
                if(assets.themes[num][key][0] != "_")
                {
                    // if(!PIXI.loader.resources[assets.themes[num][key]])
                    // {
                    //     PIXI.loader.add(assets.themes[num][key]);
                    // }
                }
            }
        }

        // PIXI.loader.load(onLoaded);
    },
};

module.exports = ConfigParser;
