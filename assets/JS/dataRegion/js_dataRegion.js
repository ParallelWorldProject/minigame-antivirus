
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onLoad:function(){
   
    },

    updateInfo:function ( infomation ){
        
        info = [ 
             infomation.budget , infomation.resource ,
             infomation.health , infomation.popularity ];

        this.node.getComponent('js_dataItemList').updateValue(info);
            

    },


});
