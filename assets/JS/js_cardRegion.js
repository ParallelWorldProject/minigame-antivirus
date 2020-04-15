

cc.Class({
    extends: cc.Component,

    properties: {
        infomationBox: {
            default: null,
            type: cc.Node
        },
        imageBox: {
            default: null,
            type: cc.Node
        },
        selectBox: {
            default: null,
            type: cc.Node
        },
    },

    onload : function(){
        this.from = this.infomationBox.getChildByName("from").getComponent(cc.Label);
        this.name = this.infomationBox.getChildByName("name").getComponent(cc.Label);
        this.date = this.infomationBox.getChildByName("date").getComponent(cc.Label);
        this.information = this.infomationBox.getChildByName("information").getComponent(cc.Label);

    },

    updateInfo : function( infomation ){
        this.infomation = infomation
        this.show()
    },

    show : function( )
    {
       this.from = this.infomation.from;
       this.name = this.infomation.name;
       this.date = this.infomation.date;
       this.infomation = this.infomation.information;
    } 
    

});
