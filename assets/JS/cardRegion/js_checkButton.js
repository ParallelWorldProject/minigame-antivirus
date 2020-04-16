

cc.Class({
    extends: cc.Component,

    properties: {
     
    },

    acceptCheck : function(  ) {
        //发射事件
        console.log("button pressed");
        
        this.node.dispatchEvent( new cc.Event.EventCustom('SelectA',1) );
    },

    declineCheck : function(  ) {
    
        this.node.dispatchEvent( new cc.Event.EventCustom('SelectB',1) );
    }
});
