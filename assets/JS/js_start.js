
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

        if (data === 'start') {
            GameManager.startGame()
        } else if( data === 'about') {
            
        }
    },
});
