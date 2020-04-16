

cc.Class({
    extends: cc.Component,

    properties: {
        infomationBox: {
            default: null,
            type: cc.node
        },
        imageBox: {
            default: null,
            type: cc.node
        },
        selectBox: {
            default: null,
            type: cc.node
        },
    },

    updateInfo : function( infomation ){
        this.infomation = infomation
    },

    
    /**/


});
