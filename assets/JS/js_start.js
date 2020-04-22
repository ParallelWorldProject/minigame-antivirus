
const GameManager = require("./utils/gameManager")

cc.Class({
    extends: cc.Component,

    properties: {
        
    },


    onLoad () {
        GameManager.wxlogin()
    },

    start () {

    },

    onClickBtn(target,data) {
        cc.log(data)

        switch (data) {
            case 'start':
                GameManager.startGame('gameScene')
                break;

            case 'about':
                
                break;
                
            default:
                break;
        }
    },
    
});
