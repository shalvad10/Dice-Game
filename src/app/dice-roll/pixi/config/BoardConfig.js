var BoardConfig =
{
    size      :{x:500,y:500},
    boardSize :{x:500,y:500},
    animations:
    {
        move:.1,
    },
    checker   :
    {
        whiteTop :null,
        whiteSide:null,
        blackTop :null,
        blackSide:null,
        topSize  :0,
        sideSize :{x:0,y:0},
        highlightSize:0,
        topPosOffset:0,
        sidePosOffset:0
    },
    dice:
    {
        size:0,
        offset:{x:0,y:0},
        images:
        {
            white:
            {
                images:{}
            },
            red:
            {
                images:{}
            },
            green:
            {
                images:{}
            },
            brown:
            {
                images:{}
            }
        }
    },
    dot:
    {
        image:null,
        image_alt:null,
        size :{x:0,y:0},
        offset:0,
    },
    HolderMax :0,
    stackOnMaxSize:0,
    holderClickRect:{x:0,y:0},
    containers:[],
    whiteKillPositionIndex:0,
    blackKillPositionIndex:0,
    checkers:[]
};

module.exports = BoardConfig;
