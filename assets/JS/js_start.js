
const GameManager = require("./utils/gameManager")

cc.Class({
    extends: cc.Component,

    properties: {
        
    },


    onLoad () {},

    start () {
        cc.sys.localStorage.clear()
        GameManager.wxlogin()
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
