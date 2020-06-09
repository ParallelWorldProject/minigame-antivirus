


cc.Class({
    extends: cc.Component,

    properties: {
        
    },


    onLoad () {},

    start () {
        cc.sys.localStorage.clear()
    },

    onClickBtn(target,data) {
        cc.log(data)

        switch (data) {
            case 'start':
                cc.director.loadScene( 'gameScene' ); break;
            default :
                cc.log("Unexsit button click");
        }
    },
    
});
