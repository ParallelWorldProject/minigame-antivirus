
var GameManager = require("GameManager")

cc.Class({
    extends: cc.Component,

    properties: {},


    onLoad () {
        GameManager.wxlogin()
    },

    start () {

    },

    // update (dt) {},
    onClickBtn(target,data) {
        cc.log(data)

        if (data === 'start') {
            GameManager.startGame()
        } else if( data === 'about') {

        }
    }
});
