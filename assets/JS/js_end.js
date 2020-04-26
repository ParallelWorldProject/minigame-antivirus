
const GameManager = require("./utils/gameManager")

cc.Class({
    extends: cc.Component,

    properties: {
        endBg: {
            default: null,
            type: cc.Sprite
        }
    },


    onLoad () {},

    start () {
        GameManager.gameover(this.endBg)
    },
    onClickRestart() {
        cc.log('restart')
        GameManager.changeGameScence('gameStart')
    }

    // update (dt) {},
});
