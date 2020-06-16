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
                cc.director.loadScene( 'gameScene' ); break;
                case 'about':
                break;
            default :
                cc.log("Unexsit button click");
        }
    },
    
});
