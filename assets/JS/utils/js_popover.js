
const GameManager = require("../utils/gameManager")

cc.Class({
    extends: cc.Component,

    properties: {
        
    },


    onLoad () {},

    start () {
    },

    onClickRestart() {
        GameManager.changeGameScence('gameStart')
    },
    closePopover() {
        this.node.getComponent(cc.Animation).play('scaleHide')
    }
});
