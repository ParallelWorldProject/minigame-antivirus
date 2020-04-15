

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

    init : function( home ){

        this.home = home
        //for infomation box
        /*this.infomationBox.ch

        this.labelBudget.string = msg.budget + '%';
        this.labelResource.string = msg.resource + '%';
        this.labelHealth.string = msg.health + '%';
        this.labelPopularity.string = msg.popularity + '%';
        console.log(this.labelBudget.string);*/
    },

    
    acceptCheck : function(  ) {

        this.msg = this.home.dataInfo
        this.msg.budget += 1;
        this.msg.resource += 1;
        this.msg.health += 1;
        this.msg.popularity += 1;

        this.home.updateInfo(this.msg);
    }


});
