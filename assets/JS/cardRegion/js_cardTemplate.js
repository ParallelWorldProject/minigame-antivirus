

cc.Class({
    extends: cc.Component,

    properties: {
        information : cc.Node,
        image : cc.Node,
        select :  cc.Node
    },

    init : function( data , isTopCard ){
        if( isTopCard == 0) 
        this.node.active = false;

        //现在只会这么写
        //修改information区
        this.from = this.information.getChildByName("from").getComponent(cc.Label);
        this.name = this.information.getChildByName("name").getComponent(cc.Label);
        this.date = this.information.getChildByName("date").getComponent(cc.Label);
        this.information = this.information.getChildByName("information").getComponent(cc.Label);


        this.from.string = data.from;
        this.name.string  = data.name;
        this.date.string  = data.date;
        this.information.string  = data.information;

        
        //修改img区域
        //this.image.getComponent(cc.Sprite).spriteFrame = picUrl;

        //修改Select区域
        //this.select.getChildByName("acceptButton").getComponent(cc.Label).stirng = "Accept";
        //this.select.getChildByName("declineButton").getComponent(cc.Label).stirng = "Decline";
    },


    moveOff : function()
    {
        this.node.active = false;
    },

    moveUp : function()
    {
        this.node.active = true;
    }
});
