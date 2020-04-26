
const GameManager = require("./utils/gameManager")

cc.Class({
    extends: cc.Component,

    properties: {
        
    },


    onLoad () {
        cc.sys.localStorage.clear()
        GameManager.wxlogin()
    },

    start () {

    },

    onClickBtn(target,data) {
        cc.log(data)

        switch (data) {
            case 'start':
                GameManager.initgame()
                GameManager.changeGameScence('gameScene')
                break;

            case 'about':
                break;

            default:
                break;
        }
    },
    
});
